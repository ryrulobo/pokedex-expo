import { Text, View, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";

export default function BaseStats({ pokemonStats }) {
  return (
    <View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Base Stats:</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.name}>HP</Text>
        <Text style={styles.detail}>{pokemonStats?.hp}</Text>
        <View style={styles.bar}>
          <Progress.Bar
            progress={pokemonStats?.hp / 100}
            width={150}
            height={10}
            color={pokemonStats?.hp / 100 < 0.5 ? "#DF2E38" : "#36AE7C"}
          />
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.name}>Attack</Text>
        <Text style={styles.detail}>{pokemonStats?.attack}</Text>
        <View style={styles.bar}>
          <Progress.Bar
            progress={pokemonStats?.attack / 100}
            width={150}
            height={10}
            color={pokemonStats?.attack / 100 < 0.5 ? "#DF2E38" : "#36AE7C"}
          />
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.name}>Defense</Text>
        <Text style={styles.detail}>{pokemonStats?.defense}</Text>
        <View style={styles.bar}>
          <Progress.Bar
            progress={pokemonStats?.defense / 100}
            width={150}
            height={10}
            color={pokemonStats?.defense / 100 < 0.5 ? "#DF2E38" : "#36AE7C"}
          />
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.name}>Sp. Attack</Text>
        <Text style={styles.detail}>{pokemonStats?.specialattack}</Text>
        <View style={styles.bar}>
          <Progress.Bar
            progress={pokemonStats?.specialattack / 100}
            width={150}
            height={10}
            color={
              pokemonStats?.specialattack / 100 < 0.5 ? "#DF2E38" : "#36AE7C"
            }
          />
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.name}>Sp. Defense</Text>
        <Text style={styles.detail}>{pokemonStats?.specialdefense}</Text>
        <View style={styles.bar}>
          <Progress.Bar
            progress={pokemonStats?.specialdefense / 100}
            width={150}
            height={10}
            color={
              pokemonStats?.specialdefense / 100 < 0.5 ? "#DF2E38" : "#36AE7C"
            }
          />
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.name}>Speed</Text>
        <Text style={styles.detail}>{pokemonStats?.speed}</Text>
        <View style={styles.bar}>
          <Progress.Bar
            progress={pokemonStats?.speed / 100}
            width={150}
            height={10}
            color={pokemonStats?.speed / 100 < 0.5 ? "#DF2E38" : "#36AE7C"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flex: 1,
    paddingHorizontal: 5,
    marginTop: 10,
    justifyContent: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    paddingHorizontal: 5,
    alignSelf: "center",
    width: 100,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    paddingBottom: 5,
  },
  detail: {
    fontWeight: "bold",
    fontSize: 16,
    paddingHorizontal: 5,
    alignSelf: "center",
    width: 40,
    textAlign: "center",
  },
  bar: {
    justifyContent: "center",
    paddingStart: 10,
  },
});
