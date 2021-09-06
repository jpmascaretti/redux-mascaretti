import React from "react";
import { View, Text } from "react-native";
import DefaultHeader from "../DefaultHeader/DefaultHeader";
import { bottomNavStyles } from "../../styles/bottomNavStyles";
import TestsTab from "../BottomTabs/TestsTab";
import { globalStyles } from "../../styles/globalStyles";

export default function Tests() {
  return (
    <View style={globalStyles.safeAreaView}>
      <DefaultHeader />
      <Text style={{ fontFamily: "pinyon-script-regular", fontSize: 30 }}>
        Tests Page to be developed
      </Text>
      <View style={bottomNavStyles.NavContainerFlex}>
        <View style={bottomNavStyles.NavContainer}>
          <TestsTab />
        </View>
      </View>
    </View>
  );
}
