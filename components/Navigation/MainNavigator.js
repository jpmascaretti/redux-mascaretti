import AuthNavigator from "./AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import TabsNavigator from "./TabsNavigator";
import { useSelector } from "react-redux";

const MainNavigator = () => {
  const userId = useSelector((state) => state.auth.userId);

  return (
    <NavigationContainer>
      {userId ? <TabsNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;
