import { ActivityIndicator, View } from "react-native";

export default function LoadingScreen({ noColor }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: noColor ? "white" : "#C6D4E5",
      }}
    >
      <ActivityIndicator size="large" color="navy" />
    </View>
  );
}
