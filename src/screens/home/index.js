import { useEffect, useState, memo } from "react";
import { StyleSheet, View } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import PokemonCard from "../../components/pokemonCard";
import LoadingScreen from "../loading";

const MemoizedPokemonCard = memo(PokemonCard);

export default function HomeScreen() {
  const navigation = useNavigation();

  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPokemons = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
      );

      const updatedPokemons = await Promise.all(
        response.data.results.map(async (pokemon, index) => {
          const { data } = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${index + 1}`
          );
          const { types } = data;
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
            index + 1
          }.png`;
          const shinyUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${
            index + 1
          }.png`;
          return {
            ...pokemon,
            imageUrl,
            shinyUrl,
            types,
            pokemonId: index + 1,
          };
        })
      );

      setPokemons(updatedPokemons);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <>
      <View style={styles.container}>
        {loading ? (
          <LoadingScreen />
        ) : (
          <FlatGrid
            itemDimension={130}
            data={pokemons}
            renderItem={({ item }) => (
              <MemoizedPokemonCard item={item} navigation={navigation} />
            )}
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C6D4E5",
  },
});
