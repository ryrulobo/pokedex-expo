import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Image, StyleSheet } from "react-native";

import HomeScreen from "./src/screens/home";
import PokemonScreen from "./src/screens/pokemon";
import logo from "./src/img/pokeball-color.png";
import MainScreen from "./src/screens/main";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => (
              <View style={styles.headerContainer}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.headerTitle}>Pokédex</Text>
              </View>
            ),
            headerStyle: {
              backgroundColor: "#192653",
            },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="PokemonDetails"
          component={PokemonScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -25,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
});
