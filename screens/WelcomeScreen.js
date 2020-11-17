import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import COLORS from "../constants/Theme";

import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      blurRadius={4}
      style={styles.background}
      source={require("../assets/imgs/register-bg.png")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/imgs/logo.png")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          color="white"
          textColor="primary"
          onPress={() => navigation.navigate("Login")}
        />
        <AppButton
          title="Register"
          color="Primary"
          textColor="white"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    padding: 20
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "white"
  },
  logo: {
    alignSelf: "center"
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center"
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: COLORS.PRIMARY
  }
});

export default WelcomeScreen;
