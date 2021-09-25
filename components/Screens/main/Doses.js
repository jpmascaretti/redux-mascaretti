import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import DefaultHeader from "../../DefaultHeader/DefaultHeader";
import DosesTab from "../../BottomTabs/DosesTab";
import { bottomNavStyles } from "../../../styles/bottomNavStyles";
import { globalStyles } from "../../../styles/globalStyles";
import DrugPicker from "../../Pickers/DrugPicker";
import FormPicker from "../../Pickers/FormPicker";
import Banner from "../../Banners/Banner";
import SliderDisplay from "../../SliderDisplay/SliderDisplay";
import { getDrugs } from "../../../store/actions/drugs.actions";
import { getForms } from "../../../store/actions/dosageform.actions";
import { useDispatch, useSelector } from "react-redux";

export default function Doses() {
  const drugList = useSelector((state) => state.drugs.drugs);
  const dosageFormList = useSelector((state) => state.forms.forms);
  const userID = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDrugs(userID));
    dispatch(getForms(userID));
  }, []);

  const [selectedDrug, setSelectedDrug] = useState("Select Drug");
  const [selectedForm, setSelectedForm] = useState("Select Form");
  const [weightSwitchEnabled, setWeightSwitchEnabled] = useState(false);
  const [heightSwitchEnabled, setHeightSwitchEnabled] = useState(false);

  return (
    <View style={globalStyles.safeAreaView}>
      <DefaultHeader />
      <View style={globalStyles.pickersView}>
        {!!drugList && !!dosageFormList && (
          <>
            <DrugPicker
              selectedDrug={selectedDrug}
              drugList={drugList}
              setSelectedDrug={setSelectedDrug}
            />
            <FormPicker
              selectedForm={selectedForm}
              dosageFormList={dosageFormList}
              setSelectedForm={setSelectedForm}
            />
          </>
        )}
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
            selectedDrug === "Select Drug" ||
            selectedForm === "Select Form" ||
            !(heightSwitchEnabled || weightSwitchEnabled)
              ? [globalStyles.calculateButtonOff, globalStyles.bottomShadow]
              : [globalStyles.calculateButton, globalStyles.bottomShadow]
          }
          disabled={
            selectedDrug === "Select Drug" ||
            selectedForm === "Select Form" ||
            !(heightSwitchEnabled || weightSwitchEnabled)
              ? true
              : false
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
