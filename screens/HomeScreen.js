import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import routes from "../navigation/route";

const posts = [
  {
    id: 1,
    title: "Red jacket for sale",
    image: require("../assets/imgs/jacket.jpg")
  },
  {
    id: 2,
    title: "Couch in great condition ",
    image: require("../assets/imgs/couch.jpg")
  }
];

const HomeScreen = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={posts}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 15
  }
});
