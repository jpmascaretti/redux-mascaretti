//Screens
import Doses from "../Screens/main/Doses";
import ROUTES from "../../routes/routes";
import React from "react";
import Records from "../Screens/main/Records";
import Tests from "../Screens/main/Tests";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const TabsNavigator = () => {
  return (
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
  );
};

export default TabsNavigator;
