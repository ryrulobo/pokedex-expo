import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import logo from "../../img/pokemon-logo.png";
import backgroundLogo from "../../img/pokeball.png";

export default function MainScreen() {
  const navigation = useNavigation();
  const goToHome = () => navigation.navigate("Home");

  return (
    <View style={styles.container}>
      <Image source={backgroundLogo} style={styles.backgroundImage} />

      <Image source={logo} style={styles.logo} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={goToHome}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C6D4E5",
    justifyContent: "center",
  },
  title: {
    alignSelf: "center",
  },
  logo: {
    alignSelf: "center",
    width: "75%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "navy",
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  backgroundImage: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [
      { translateX: -Dimensions.get("window").width * 0.4 },
      { translateY: -Dimensions.get("window").height * 0.4 },
    ],
    width: "80%",
    height: "80%",
    zIndex: -1,
    resizeMode: "contain",
  },
});
