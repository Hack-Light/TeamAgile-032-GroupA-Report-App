import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback
} from "react-native";

import AppText from "./AppText";

import COLORS from "../constants/Theme";

const ListItem = ({ title, subTitle, image, iconComponent, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        {iconComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "white"
  },
  detailsContainer: { marginLeft: 10, justifyContent: "center" },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35
  },
  subTitle: {
    color: COLORS.MEDIUM
  },
  title: {
    fontWeight: "900"
  }
});

export default ListItem;
