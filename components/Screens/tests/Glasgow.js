import React, { useState } from "react";
import TestsTab from "../../BottomTabs/TestsTab";
import { View, Text, TouchableOpacity } from "react-native";
import { bottomNavStyles } from "../../../styles/bottomNavStyles";
import { globalStyles } from "../../../styles/globalStyles";
import DefaultHeader from "../../DefaultHeader/DefaultHeader";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TESTRESPONSES } from "../../../constants/testresponses";
import GlasgowScrollview from "../../GlasgowScrollview/GlasgowScrollview";

export default function Glasgow() {
  const navigation = useNavigation();
  const [selectedEyeOpeningValue, setSelectedEyeOpeningValue] = useState(null);
  const [selectedVerbalValue, setSelectedVerbalValue] = useState(null);
  const [selectedMotorValue, setSelectedMotorValue] = useState(null);

  return (
    <View style={globalStyles.safeAreaView}>
      <DefaultHeader />
      <TouchableOpacity
        style={globalStyles.backToRecords}
        onPress={() => navigation.navigate("Tests")}
      >
        <AntDesign name="arrowleft" size={24} color="#C4C4C4" />
        <Text style={globalStyles.btrText}>Back to Tests</Text>
      </TouchableOpacity>
      <View style={globalStyles.glasgowView}>
        <Text style={globalStyles.glasgowText}>Glasgow Test</Text>
        <View style={globalStyles.glasgowBanner}>
          <Text style={globalStyles.glasgowBannerText}>
            Eye Opening Response
          </Text>
        </View>
        <View style={globalStyles.scrollViewHeight}>
          <GlasgowScrollview
            responseArray={TESTRESPONSES.eyeResponses}
            setValue={setSelectedEyeOpeningValue}
          />
        </View>

        <View style={globalStyles.glasgowBanner}>
          <Text style={globalStyles.glasgowBannerText}>
            Best Verbal Response
          </Text>
        </View>
        <View style={globalStyles.scrollViewHeight}>
          <GlasgowScrollview
            responseArray={TESTRESPONSES.verbalResponses}
            setValue={setSelectedVerbalValue}
          />
        </View>

        <View style={globalStyles.glasgowBanner}>
          <Text style={globalStyles.glasgowBannerText}>
            Best Motor Response
          </Text>
        </View>
        <View style={globalStyles.scrollViewHeight}>
          <GlasgowScrollview
            responseArray={TESTRESPONSES.motorResponses}
            setValue={setSelectedMotorValue}
          />
        </View>

        <TouchableOpacity
          style={
            selectedEyeOpeningValue && selectedVerbalValue && selectedMotorValue
              ? [globalStyles.calculateButton, globalStyles.bottomShadow]
              : [globalStyles.calculateButtonOff, globalStyles.bottomShadow]
          }
          disabled={
            selectedEyeOpeningValue && selectedVerbalValue && selectedMotorValue
              ? false
              : true
          }
        >
          <Text style={globalStyles.calculateButtonText}>CALCULATE</Text>
        </TouchableOpacity>
      </View>

      <View style={bottomNavStyles.NavContainerFlex}>
        <View style={bottomNavStyles.NavContainer}>
          <TestsTab />
        </View>
      </View>
    </View>
  );
}
