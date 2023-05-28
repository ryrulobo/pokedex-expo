import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { getContainerColor } from "../../../helpers/getContainerColor";

import { setPokemonId } from "../../../helpers/setPokemonStat";
import backgroundLogo from "../../img/pokeball.png";

export default function PokemonCard({ item, navigation }) {
  const handleNavigation = () => {
    navigation.navigate("PokemonDetails", { item });
  };

  const containerColor = getContainerColor(item.types[0].type.name);

  return (
    <TouchableOpacity onPress={handleNavigation} activeOpacity={0.9}>
      <View
        style={[styles.pokemonContainer, { backgroundColor: containerColor }]}
      >
        <Image source={backgroundLogo} style={styles.backgroundImage} />
        <Text style={styles.pokemonTitle}>
          {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
        </Text>
        <View style={styles.typeContainer}>
          {item.types.map((type, index) => (
            <Text key={index} style={styles.pokemonType}>
              {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
            </Text>
          ))}
        </View>
        <Image source={{ uri: item.imageUrl }} style={styles.pokemonSprite} />
        <Text style={styles.pokemonId}>{setPokemonId(item.pokemonId)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pokemonContainer: {
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    overflow: "hidden",
  },
  backgroundImage: {
    position: "absolute",
    top: 80,
    left: 80,
    width: "75%",
    height: "75%",
    zIndex: -1,
    resizeMode: "contain",
  },
  pokemonTitle: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  pokemonSprite: {
    width: 110,
    height: 110,
    alignSelf: "flex-end",
  },
  typeContainer: {
    flexDirection: "row",
  },
  pokemonType: {
    marginTop: 5,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 15,
    marginRight: 5,
    color: "white",
    backgroundColor: "rgba(100, 100, 100, 0.7)",
    alignSelf: "flex-start",
  },
  pokemonId: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    bottom: 10,
    left: 10,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
});
