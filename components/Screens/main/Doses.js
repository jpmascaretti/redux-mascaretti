import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import DefaultHeader from "../../DefaultHeader/DefaultHeader";
import DosesTab from "../../BottomTabs/DosesTab";
import { bottomNavStyles } from "../../../styles/bottomNavStyles";
import { globalStyles } from "../../../styles/globalStyles";
import DrugPicker from "../../Pickers/DrugPicker";
import FormPicker from "../../Pickers/FormPicker";
import Banner from "../../Banners/Banner";
import SliderDisplay from "../../SliderDisplay/SliderDisplay";

export default function Doses() {
  const [selectedDrug, setSelectedDrug] = useState("Select Drug");
  const [selectedForm, setSelectedForm] = useState("Select Form");

  const [weightSwitchEnabled, setWeightSwitchEnabled] = useState(false);
  const [heightSwitchEnabled, setHeightSwitchEnabled] = useState(false);

  return (
    <View style={globalStyles.safeAreaView}>
      <DefaultHeader />
      <View style={globalStyles.pickersView}>
        <DrugPicker
          selectedDrug={selectedDrug}
          setSelectedDrug={setSelectedDrug}
        />
        <FormPicker
          selectedForm={selectedForm}
          setSelectedForm={setSelectedForm}
        />
        <Banner
          bannerText="Weight (kg)"
          switchEnabled={weightSwitchEnabled}
          setSwitchEnabled={setWeightSwitchEnabled}
        />
        <SliderDisplay
          switchEnabled={weightSwitchEnabled}
          minValue={0}
          maxValue={30}
          unit={"kg"}
        />
        <Banner
          bannerText="Height (cm)"
          switchEnabled={heightSwitchEnabled}
          setSwitchEnabled={setHeightSwitchEnabled}
        />
        <SliderDisplay
          switchEnabled={heightSwitchEnabled}
          minValue={0}
          maxValue={100}
          unit={"cm"}
        />
        <TouchableOpacity
          style={
            !(heightSwitchEnabled || weightSwitchEnabled)
              ? [globalStyles.calculateButtonOff, globalStyles.bottomShadow]
              : [globalStyles.calculateButton, globalStyles.bottomShadow]
          }
          disabled={
            !(heightSwitchEnabled || weightSwitchEnabled) ? true : false
          }
        >
          <Text style={globalStyles.calculateButtonText}>CALCULATE</Text>
        </TouchableOpacity>
      </View>

      <View style={bottomNavStyles.NavContainerFlex}>
        <View style={bottomNavStyles.NavContainer}>
          <DosesTab />
        </View>
      </View>
    </View>
  );
}
