import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import COLORS from "../constants/Theme";

const NewCrimeButton = ({ onPress, onLongPress }) => {
  return (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={COLORS.WHITE}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
};

export default NewCrimeButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 40,
    height: 80,
    width: 80,
    bottom: 30,
    borderColor: COLORS.WHITE,
    borderWidth: 6,
    alignItems: "center",
    justifyContent: "center"
  }
});
