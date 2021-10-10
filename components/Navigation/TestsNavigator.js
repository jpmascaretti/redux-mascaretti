import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Tests from '../Screens/main/Tests'
import Glasgow from '../Screens/tests/Glasgow'
import Apgar from '../Screens/tests/Apgar'


const TestsNavigator = () => (
  <Stack.Navigator
    initialRouteName="Tests"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Tests" component={Tests} />
    <Stack.Screen name="Glasgow" component={Glasgow} />
    <Stack.Screen name="Apgar" component={Apgar} />

  </Stack.Navigator>
);

export default TestsNavigator;
