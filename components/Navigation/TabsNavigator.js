//Screens
import Doses from "../Screens/main/Doses";
import ROUTES from "../../routes/routes";
import React from "react";
import Tests from "../Screens/main/Tests";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecordsNavigator from "./RecordsNavigator";

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
    </Stack.Navigator>
  );
};

export default TabsNavigator;
