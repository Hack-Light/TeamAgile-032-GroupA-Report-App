import React from "react";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import COLORS from "../constants/Theme";

export default function AppButton({
  title,
  onPress,
  color = "primary",
  textColor
}) {
  let colorStlye = color.toUpperCase();
  return (
    <TouchableOpacity
      style={[styles.buttons, { backgroundColor: COLORS[colorStlye] }]}
      onPress={onPress}
    >
      <Text style={[styles.title, { color: COLORS[textColor.toUpperCase()] }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttons: {
    marginVertical: 10,
    backgroundColor: COLORS.WHITE,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%"
  },
  title: {
    color: COLORS.BLACK,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold"
  }
});
