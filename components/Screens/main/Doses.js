import { View } from "react-native";
import { useState } from "react";
import DefaultHeader from "../../DefaultHeader/DefaultHeader";
import DosesTab from "../../BottomTabs/DosesTab";
import React from "react";
import { bottomNavStyles } from "../../../styles/bottomNavStyles";
import { globalStyles } from "../../../styles/globalStyles";
import DrugPicker from "../../Pickers/DrugPicker";
import FormPicker from "../../Pickers/FormPicker";
import Banner from "../../Banners/Banner";

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
        <Banner
          bannerText="Height (cm)"
          switchEnabled={heightSwitchEnabled}
          setSwitchEnabled={setHeightSwitchEnabled}
        />
      </View>

      <View style={bottomNavStyles.NavContainerFlex}>
        <View style={bottomNavStyles.NavContainer}>
          <DosesTab />
        </View>
      </View>
    </View>
  );
}
