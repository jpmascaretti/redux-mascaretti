import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import DefaultHeader from "../../DefaultHeader/DefaultHeader";
import DosesTab from "../../BottomTabs/DosesTab";
import Slider from "@react-native-community/slider";
import { bottomNavStyles } from "../../../styles/bottomNavStyles";
import { globalStyles } from "../../../styles/globalStyles";
import DrugPicker from "../../Pickers/DrugPicker";
import FormPicker from "../../Pickers/FormPicker";
import Banner from "../../Banners/Banner";

export default function Doses() {
  const [selectedDrug, setSelectedDrug] = useState("Select Drug");
  const [selectedForm, setSelectedForm] = useState("Select Form");
  const [weightSliderValue, setWeightSliderValue] = useState(0);
  const [heightSliderValue, setHeightSliderValue] = useState(0);

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
        <Slider
          style={{ width: 250, height: 40 }}
          minimumValue={0}
          maximumValue={30}
          step={0.5}
          minimumTrackTintColor="#DD41E0"
          maximumTrackTintColor="#EEA0F0"
          thumbTintColor="#DD41E0"
          value={weightSliderValue}
          onValueChange={(value) => setWeightSliderValue(value)}
        />
        <View style={globalStyles.sliderBubble}>
          <Text style={globalStyles.sliderBubbleText}>
            {weightSliderValue} kg
          </Text>
        </View>
        <Banner
          bannerText="Height (cm)"
          switchEnabled={heightSwitchEnabled}
          setSwitchEnabled={setHeightSwitchEnabled}
        />

        <Slider
          style={{ width: 250, height: 40 }}
          minimumValue={0}
          maximumValue={100}
          step={0.5}
          minimumTrackTintColor="#DD41E0"
          maximumTrackTintColor="#EEA0F0"
          thumbTintColor="#DD41E0"
          value={heightSliderValue}
          onValueChange={(value) => setHeightSliderValue(value)}
        />
        <View style={globalStyles.sliderBubble}>
          <Text style={globalStyles.sliderBubbleText}>
            {heightSliderValue} cm
          </Text>
        </View>
        <TouchableOpacity style={[globalStyles.calculateButton, globalStyles.bottomShadow]}>
          <Text style={globalStyles.calculateButtonText}>Calculate</Text>
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
