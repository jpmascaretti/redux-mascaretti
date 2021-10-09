import { View, Text, TouchableOpacity, Modal, Image } from "react-native";
import React, { useState, useEffect } from "react";
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
import DosesHeader from "../../DosesHeader/DosesHeader";

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
  const [doseModalMessage, setDoseModalMessage] = useState("");
  const [drugImage, setDrugImage] = useState("");
  const [doseModalMessageAdministration, setDoseModalMessageAdministration] =
    useState("");
  const [weightSliderValue, setWeightSliderValue] = useState(0);
  const [heightSliderValue, setHeightSliderValue] = useState(0);

  const [doseModalVisible, setDosePatientModalVisible] = useState(false);
  const [addDrugModalBackdrop, setAddDrugModalBackdrop] = useState(false);

  function handleDoseModal() {
    setDosePatientModalVisible(true);
    const modalDrug = drugList.find((drugs) => drugs.drug === selectedDrug);
    const modalForm = dosageFormList.find(
      (form) => `${form.amount} ${form.unit}` === selectedForm
    );
    setDrugImage(modalDrug.imageURL);
    setDoseModalMessage(
      `${parseFloat(
        modalDrug.dose * parseFloat(modalForm.amount/10).toPrecision(3) *
          weightSliderValue *
          (1 + heightSliderValue / 100) *
          (modalDrug.dilute / modalDrug.dissolve)
      ).toPrecision(3)} ${modalDrug.diluteUnit} of`
    );
    setDoseModalMessageAdministration(
      `${modalDrug.indication} ${parseFloat(
        (
          modalDrug.dose * parseFloat(modalForm.amount/10).toPrecision(3) *
          weightSliderValue *
          (1 + heightSliderValue / 100) *
          modalDrug.dissolve
        ).toPrecision(3)
      )} ${modalDrug.dissolveUnit} of ${modalDrug.drug} in ${parseFloat(
        (
          modalDrug.dose * parseFloat(modalForm.amount/10).toPrecision(3) *
          weightSliderValue *
          (1 + heightSliderValue / 100) *
          modalDrug.dilute
        ).toPrecision(3)
      )} ${modalDrug.diluteUnit} of saline solution.`
    );
  }

  const handleOpenBackdrop = () => {
    setAddDrugModalBackdrop(true);    
  };

  function handleCloseBackdrop() {
    setAddDrugModalBackdrop(false);  }
    
  function handleCloseDoseModal() {
    setDosePatientModalVisible(false);
  }

  return (
    <View
      style={
        (doseModalVisible || addDrugModalBackdrop)
          ? globalStyles.safeAreaViewModal
          : globalStyles.safeAreaView
      }
    >
      <DosesHeader handleOpenBackdrop={handleOpenBackdrop} handleCloseBackdrop={handleCloseBackdrop}/>
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
      {!doseModalVisible && (
        <View style={bottomNavStyles.NavContainerFlex}>
          <View style={bottomNavStyles.NavContainer}>
            <DosesTab setAddDrugModalBackdrop={setAddDrugModalBackdrop}/>
          </View>
        </View>
      )}
      <Modal animationType="fade" visible={doseModalVisible} transparent>
        <View style={modalStyles.modalContainer}>
          <View
            style={[modalStyles.doseModalContent, globalStyles.bottomShadow]}
          >
            <View style={modalStyles.topDrugBar}>
              <Text style={modalStyles.topDugBarText}>{selectedDrug} {selectedForm}</Text>
              <TouchableOpacity onPress={handleCloseDoseModal}>
                <AntDesign
                  name="close"
                  size={20}
                  color="white"
                  style={modalStyles.closeIconStyleDoseModal}
                />
              </TouchableOpacity>
            </View>
            <View>
              <View style={modalStyles.doseTextContainer}>
              <Text style={modalStyles.doseTextBold}>Dose:</Text>
              <Text style={modalStyles.doseTextCorpus}>{doseModalMessage}</Text>
              <Text style={modalStyles.doseTextDrugCorpus}>{selectedDrug}</Text>
              </View>
              {drugImage !== 'nourl' && <Image
                style={{ marginLeft: 7.5, width: 300, height: 300, borderRadius: 15 }}
                source={{
                  uri: drugImage,
                }}
                resizeMode={"cover"} // cover or contain its upto you view look
              />}
              <View style={modalStyles.modalSeparator}><Text style={modalStyles.modalPrepText}>Preparation:</Text></View>
              <View style={modalStyles.prepTextContainer}>
              <Text style={modalStyles.doseTextPrep}>{doseModalMessageAdministration}</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
