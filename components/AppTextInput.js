import React from "react";
import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import COLORS from "../constants/Theme";

const AppTextInput = ({ icon, style, width = "100%", ...otherProps }) => {
  return (
    <View style={[styles.container, style, { width: width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={COLORS.PRIMARY}
          style={styles.icon}
        />
      )}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.LIGHT,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    paddingRight: 30,
    marginVertical: 10,
    alignItems: "center"
  },

  icon: {
    marginRight: 15
  },
  textInput: {
    color: COLORS.DARK,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
  }
});
