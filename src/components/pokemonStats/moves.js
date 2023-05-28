import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function PokemonMoves({ pokemonMoves }) {
  return (
    <View style={styles.row}>
      <View style={styles.column}>
        <Text style={styles.detailsLabel}>Moves:</Text>
        <ScrollView>
          <View style={styles.container}>
            {pokemonMoves.map((move, index) => (
              <Text key={index} style={styles.move}>
                {move}
              </Text>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 5,
    paddingLeft: 20,
    flexWrap: "wrap",
    paddingBottom: 30,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailsLabel: {
    fontWeight: "bold",
    fontSize: 16,
  },
  column: {
    flex: 1,
    paddingHorizontal: 5,
    marginTop: 10,
    justifyContent: "center",
  },
  move: {
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
});
