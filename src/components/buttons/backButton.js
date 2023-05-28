import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const BackButton = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleGoBack}>
      <Icon name="arrow-back" size={30} color={"white"} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingTop: 10,
    paddingLeft: 10,
    borderRadius: 5,
    alignSelf: "flex-start",
    color: "white",
    marginTop: 30,
  },
});

export default BackButton;
