import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ROUTES from "../../routes/routes";
//Screens
import Doses from "../Screens/Doses";
import Records from "../Screens/Records";
import Tests from "../Screens/Tests";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ROUTES.RECORDS}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={ROUTES.RECORDS} component={Records} />
        <Stack.Screen name={ROUTES.DOSES} component={Doses} />
        <Stack.Screen name={ROUTES.TESTS} component={Tests} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
