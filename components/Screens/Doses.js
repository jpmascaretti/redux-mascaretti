import React from "react";
import { View, Text } from "react-native";
import DefaultHeader from "../DefaultHeader/DefaultHeader";
import { bottomNavStyles } from "../../styles/bottomNavStyles";
import DosesTab from "../BottomTabs/DosesTab";
import { globalStyles } from "../../styles/globalStyles";

export default function Doses() {
  return (
    <View style={globalStyles.safeAreaView}>
      <DefaultHeader />
      <Text style={{ fontFamily: "pinyon-script-regular", fontSize: 30 }}>
        Doses Page to be developed
      </Text>
      <View style={bottomNavStyles.NavContainerFlex}>
        <View style={bottomNavStyles.NavContainer}>
          <DosesTab />
        </View>
      </View>
    </View>
  );
}