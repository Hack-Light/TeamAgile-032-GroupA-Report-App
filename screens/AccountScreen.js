import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";

import Screen from "../components/Screen";
import COLORS from "../constants/Theme";

const menuItems = [
  {
    title: "Activities",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: COLORS.PRIMARY
    },
    targetScreen: "UserPosts"
  },
  {
    title: "Posts",
    icon: {
      name: "email",
      backgroundColor: COLORS.SUB_SECONDARY
    }
  }
];

const AccountScreen = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Account Owner"
          subTitle="+23480-5847-3284"
          image={require("../assets/imgs/melanin.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              iconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <ListItem
        title="Log Out"
        iconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: COLORS.LIGHT
  },
  container: {
    marginVertical: 20
  }
});
