import React from "react";

import { StyleSheet, Text, Platform } from "react-native";

export default function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,

    ...Platform.select({
      ios: {
        fontFamily: "Avenir"
      },
      android: {
        fontFamily: "Roboto"
      }
    })
  }
});
