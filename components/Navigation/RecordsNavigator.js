import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Records from '../Screens/main/Records';
import Archive from '../Screens/records/Archive'
const Stack = createNativeStackNavigator();

const RecordsNavigator = () => (
  <Stack.Navigator
    initialRouteName="Records"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Records" component={Records} />
    <Stack.Screen name="Archive" component={Archive} />
  </Stack.Navigator>
);

export default RecordsNavigator;