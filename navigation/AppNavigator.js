import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import CrimeReportScreen from "../screens/CrimeReportScreen";
import PostNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewCrimeButton from "./NewCrimeButton";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        )
      }}
    />
    <Tab.Screen
      name="NewCrime"
      component={CrimeReportScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewCrimeButton
            onPress={() => navigation.navigate("NewCrime")}
            onLongPress={() => alert("Emergency")}
          />
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        )
      })}
    />
    <Tab.Screen
      name="Posts"
      component={PostNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        )
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
