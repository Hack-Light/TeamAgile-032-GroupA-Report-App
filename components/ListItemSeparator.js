import React from "react";
import { StyleSheet, View } from "react-native";

import COLORS from "../constants/Theme";

function ListItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 2,
    backgroundColor: COLORS.LIGHT
  }
});

export default ListItemSeparator;
