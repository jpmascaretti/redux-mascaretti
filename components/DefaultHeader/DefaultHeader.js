import React from "react";
import { globalStyles } from "../../styles/globalStyles";

import { Text, View } from "react-native";

export default DefaultHeader = () => {
  return (
    <View style={globalStyles.upperBarDefault}>
      <Text style={globalStyles.doseTextDefault}>DoSe+</Text>
    </View>
  );
};
