import { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { getContainerColor } from "../../../helpers/getContainerColor";
import axios from "axios";

import backgroundLogo from "../../img/pokeball.png";
import BackButton from "../../components/buttons/backButton";
import {
  setPokemonAbilities,
  setPokemonBaseStat,
  setPokemonHeight,
  setPokemonId,
  setPokemonMoves,
  setPokemonWeight,
} from "../../../helpers/setPokemonStat";

import LoadingScreen from "../loading";
import PokemonMoves from "../../components/pokemonStats/moves";
import BaseStats from "../../components/pokemonStats/baseStats";

export default function PokemonScreen({ route }) {
  const { item } = route.params;
  const { pokemonId } = item;

  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isShiny, setIsShiny] = useState(false);

  const getPokemon = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      );
      setPokemonDetails(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const formatName = (name) => name.charAt(0).toUpperCase() + name.slice(1);

  const containerColor = getContainerColor(item.types[0].type.name);
  const { height, weight, abilities, stats, moves } = pokemonDetails;
  const pokemonStats = stats && setPokemonBaseStat(stats);
  const pokemonMoves = moves && setPokemonMoves(moves);

  return (
    <View style={[styles.container, { backgroundColor: containerColor }]}>
      <BackButton />

      <Image source={backgroundLogo} style={styles.backgroundImage} />
      <Text style={styles.pokemonName}>{formatName(item.name)}</Text>
      <Text style={styles.pokemonId}>{setPokemonId(item.pokemonId)}</Text>
      <View style={styles.typeContainer}>
        {item.types.map((type, index) => (
          <Text key={index} style={styles.pokemonType}>
            {formatName(type.type.name)}
          </Text>
        ))}
      </View>
      <Image
        source={{ uri: isShiny ? item.shinyUrl : item.imageUrl }}
        style={styles.pokemonSprite}
      />

      <View style={styles.detailsContainer}>
        {loading ? (
          <LoadingScreen noColor={true} />
        ) : (
          <>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setIsShiny(!isShiny)}
                activeOpacity={0.7}
              >
                <Text style={styles.buttonText}>
                  {!isShiny ? "Normal" : "Shiny"}
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView>
              <View style={styles.row}>
                <View style={styles.column}>
                  <Text style={styles.detailsLabel}>Weight:</Text>
                  <Text style={styles.detailsValue}>
                    {setPokemonWeight(weight)}
                  </Text>
                </View>
                <View style={styles.column}>
                  <Text style={styles.detailsLabel}>Height:</Text>
                  <Text style={styles.detailsValue}>
                    {setPokemonHeight(height)}
                  </Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.column}>
                  <Text style={styles.detailsLabel}>Abilities:</Text>
                  <Text style={styles.detailsValue}>
                    {abilities && setPokemonAbilities(abilities)}
                  </Text>
                </View>
              </View>

              {stats && pokemonStats && (
                <BaseStats pokemonStats={pokemonStats} />
              )}
              {pokemonMoves && <PokemonMoves pokemonMoves={pokemonMoves} />}
            </ScrollView>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundImage: {
    position: "absolute",
    top: 95,
    left: 230,
    width: "50%",
    height: "50%",
    zIndex: -1,
    resizeMode: "contain",
  },
  detailsContainer: {
    flex: 1,
    marginTop: 180,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  pokemonName: {
    paddingTop: 5,
    paddingLeft: 25,
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  pokemonId: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    top: 105,
    right: 20,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  typeContainer: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingTop: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flex: 1,
    marginTop: 10,
    justifyContent: "center",
    marginStart: 5,
  },
  pokemonSprite: {
    width: 225,
    height: 225,
    top: 160,
    alignSelf: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 1,
    marginBottom: 10,
  },
  detailsLabel: {
    fontWeight: "bold",
    fontSize: 16,
  },
  detailsValue: {
    alignSelf: "flex-start",
    fontSize: 16,
  },
  pokemonType: {
    marginVertical: 2,
    marginStart: 2,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginRight: 5,
    color: "white",
    backgroundColor: "rgba(100, 100, 100, 0.7)",
    alignSelf: "flex-start",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
  },
  button: {
    backgroundColor: "#192653",
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
