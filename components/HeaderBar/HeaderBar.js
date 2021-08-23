import React from "react";
import { StatusBar } from "expo-status-bar";

import AddPatientContainer from "../AddPatientContainer/AddPatientContainer";
import { View } from "react-native";

export default HeaderBar = () => {
  return (
    <View>
      <StatusBar backgroundColor="#BB22B5" style="light" />
      <AddPatientContainer />
    </View>
  );
};
