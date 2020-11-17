import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import AppText from "../components/AppText";

import Screen from "../components/Screen";

import COLORS from "../constants/Theme";

const PostDetailsScreen = ({ route }) => {
  const post = route.params;
  return (
    <Screen>
      <Image style={styles.image} source={post.image} />

      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{post.title}</AppText>
        <AppText style={styles.post}>
          this is just a fucking made up text to show how this should work and i
          dont konw when it will happen but i am sure it is going up and runnig
          in the better days of tommorrow and even nwext week
        </AppText>
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({
  detailContainer: {
    padding: 20
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",

    color: COLORS.MUTED
  },
  post: {
    marginVertical: 10
  },
  image: {
    width: "100%",
    height: 200
  }
});

export default PostDetailsScreen;
