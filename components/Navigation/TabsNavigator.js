//Screens
import Doses from "../Screens/main/Doses";
import ROUTES from "../../routes/routes";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecordsNavigator from "./RecordsNavigator";
import Tests from '../Screens/main/Tests'
import Apgar from '../Screens/tests/Apgar'
import Glasgow from "../Screens/tests/Glasgow";

const Stack = createNativeStackNavigator();

const TabsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.RECORDSNAV}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.RECORDSNAV} component={RecordsNavigator} />
      <Stack.Screen name={ROUTES.DOSES} component={Doses} />
      <Stack.Screen name={ROUTES.TESTS} component={Tests} />
      <Stack.Screen name={ROUTES.GLASGOW} component={Glasgow} />
    </Stack.Navigator>
  );
};

export default TabsNavigator;
