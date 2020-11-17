import React, { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";

import Screen from "./components/Screen";
import navigationTheme from "./navigation/navigationTheme";
import AppNavigator from "./navigation/AppNavigator";

export default App = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
};
