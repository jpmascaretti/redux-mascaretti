import { View, Text, TouchableOpacity, Modal } from "react-native";
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
import { AntDesign } from "@expo/vector-icons";
import { modalStyles } from "../../../styles/modalStyles";
import { iconStyles } from "../../../styles/iconStyles";

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
  const [doseModalMessage, setDoseModalMessage] = useState("")
  const [doseModalMessageAdministration, setDoseModalMessageAdministration] = useState("")
  const [weightSliderValue, setWeightSliderValue] = useState(0);
  const [heightSliderValue, setHeightSliderValue] = useState(0);

  const [doseModalVisible, DosePatientModalVisible] = useState(false);

  function handleDoseModal() {
    DosePatientModalVisible(true)
    const modalDrug = drugList.find((drugs) => drugs.drug === selectedDrug)
    const modalForm = dosageFormList.find((form) => `${form.amount} ${form.unit}` === selectedForm)
    setDoseModalMessage(`${parseFloat(modalDrug.dose * weightSliderValue * (1 + heightSliderValue/100) * (modalDrug.dilute / modalDrug.dissolve)).toPrecision(3)} ${modalDrug.diluteUnit} of ${modalDrug.drug}`)
    setDoseModalMessageAdministration(`${modalDrug.indication} ${parseFloat((modalDrug.dose * weightSliderValue * (1 + heightSliderValue/100 )* modalDrug.dissolve).toPrecision(3))} ${modalDrug.dissolveUnit} in ${parseFloat((modalDrug.dose * weightSliderValue * (1 + heightSliderValue/100)* modalDrug.dilute).toPrecision(3))} ${modalDrug.diluteUnit}`)
  }

  function handleCloseDoseModal() {
    DosePatientModalVisible(false)
  }

  return (
    <View style={doseModalVisible ? globalStyles.safeAreaViewModal : globalStyles.safeAreaView}>
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
          sliderValue={weightSliderValue}
          setSliderValue={setWeightSliderValue}
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
          sliderValue={heightSliderValue}
          setSliderValue={setHeightSliderValue}
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
          onPress={handleDoseModal}
        >
          <Text style={globalStyles.calculateButtonText}>CALCULATE</Text>
        </TouchableOpacity>
      </View>
        {!doseModalVisible &&
      <View style={bottomNavStyles.NavContainerFlex}>
        <View style={bottomNavStyles.NavContainer}>
          <DosesTab />
        </View>
      </View>
      }
      <Modal animationType="fade" visible={doseModalVisible} transparent>
        <View style={modalStyles.modalContainer}>
          <View style={[modalStyles.doseModalContent, globalStyles.bottomShadow]}>
            <TouchableOpacity onPress={handleCloseDoseModal}>
              <AntDesign
                name="close"
                size={20}
                color="#BB22B5"
                style={iconStyles.closeIconStyleDoseModal}
              />
            </TouchableOpacity>
            <Text>Dose:</Text>
            <Text>{doseModalMessage}</Text>
            <Text>Preparation:</Text>
            <Text>{doseModalMessageAdministration}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}
