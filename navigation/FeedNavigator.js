import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import PostDetailsScreen from "../screens/PostDetailsScreen";

const Stack = createStackNavigator();

const PostNavigator = () => (
  <Stack.Navigator initialRoute="Posts" mode="modal">
    <Stack.Screen name="Posts" component={HomeScreen} />
    <Stack.Screen
      name="PostDetails"
      component={PostDetailsScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default PostNavigator;
