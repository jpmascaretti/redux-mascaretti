import React, { useState } from "react";
import TestsTab from "../../BottomTabs/TestsTab";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { bottomNavStyles } from "../../../styles/bottomNavStyles";
import { globalStyles } from "../../../styles/globalStyles";
import DefaultHeader from "../../DefaultHeader/DefaultHeader";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TESTRESPONSES } from "../../../constants/testresponses";
import GlasgowScrollview from "../../GlasgowScrollview/GlasgowScrollview";
import { modalStyles } from "../../../styles/modalStyles";
import { iconStyles } from "../../../styles/iconStyles";

export default function Glasgow() {
  const navigation = useNavigation();
  const [selectedEyeOpeningValue, setSelectedEyeOpeningValue] = useState(null);
  const [selectedVerbalValue, setSelectedVerbalValue] = useState(null);
  const [selectedMotorValue, setSelectedMotorValue] = useState(null);
  const [glasgowModalOpen, setGlasgowModalOpen] = useState(false);

  function setGlasgowModalVisible() {
    setGlasgowModalOpen(true)
  }

  function closeGlasgowModal() {
    setGlasgowModalOpen(false)
  }

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
          onPress={() => setGlasgowModalVisible()}
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
      <Modal animationType="fade" visible={glasgowModalOpen} transparent>
        <View style={modalStyles.modalContainer}>
          <View style={[modalStyles.glasgowModalContent, globalStyles.bottomShadow]}>
            <TouchableOpacity onPress={closeGlasgowModal}>
              <AntDesign
                name="close"
                size={20}
                color="white"
                style={iconStyles.closeIconStyle}
              />
            </TouchableOpacity>
            <Text style={modalStyles.glasgowScoreModalText}>Glasgow Score: {selectedEyeOpeningValue + selectedVerbalValue + selectedMotorValue}</Text>
          </View>
        </View>
      </Modal> 

      <View style={bottomNavStyles.NavContainerFlex}>
        <View style={bottomNavStyles.NavContainer}>
          <TestsTab />
        </View>
      </View>
    </View>
  );
}
