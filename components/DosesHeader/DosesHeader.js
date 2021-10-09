import React, { useState, useEffect } from "react";
import { globalStyles } from "../../styles/globalStyles";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { getDrugs } from "../../store/actions/drugs.actions";
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { modalStyles } from "../../styles/modalStyles";
import { AntDesign } from "@expo/vector-icons";
import { iconStyles } from "../../styles/iconStyles";
import { ImageSelector } from "../ImageSelector/ImageSelector";
import { addCustomDrug } from "../../store/actions/drugs.actions";
export default DosesHeader = ({ handleOpenBackdrop, handleCloseBackdrop }) => {
  const drugList = useSelector((state) => state.drugs.drugs);
  const userID = useSelector((state) => state.auth.userId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDrugs(userID));
  }, []);

  const [addDrugModalVisible, setAddDrugModalVisible] = useState(false);
  const [drugName, onChangeDrugName] = useState(null);
  const [doseAmount, onChangeDoseAmount] = useState(null);
  const [dosageUnit, onChangeDosageUnit] = useState(null);
  const [dissolventAmount, onChangeDissolventAmount] = useState(null);
  const [dissolventUnit, onChangeDissolventUnit] = useState(null);
  const [diluteAmount, onChangeDiluteAmount] = useState(null);
  const [diluteUnit, onChangeDiluteUnit] = useState(null);
  const [indications, onChangeIndications] = useState(null);
  const [tempImageUrl, setTempImageUrl] = useState("nourl");
  const handleAddDrugModal = () => {
    handleOpenBackdrop();
    setAddDrugModalVisible(true);
  };
  function handleCloseAddDrugModal() {
    handleCloseBackdrop();
    onChangeDrugName(null);
    onChangeDoseAmount(null);
    onChangeDosageUnit(null);
    onChangeDissolventAmount(null);
    onChangeDissolventUnit(null);
    onChangeDiluteAmount(null);
    onChangeDiluteUnit(null);
    onChangeIndications(null);
    setTempImageUrl("nourl");
    setAddDrugModalVisible(false);
  }
  function retrieveImageURL(imageURL) {
    setTempImageUrl(imageURL);
  }
  function createDrug() {
    const newDrug = {
      drug: drugName,
      dose: doseAmount,
      dosage: dosageUnit,
      dissolve: dissolventAmount,
      dissolveUnit: dissolventUnit,
      dilute: diluteAmount,
      diluteUnit: diluteUnit,
      indication: indications,
      imageURL: "nourl",
    };

    dispatch(addCustomDrug(newDrug, drugList, tempImageUrl));
  }
  return (
    <SafeAreaView>
      <View style={globalStyles.drugsHeaderContainer}>
        <Text style={globalStyles.drugsHeaderText}>DoSe+</Text>
        <TouchableOpacity onPress={handleAddDrugModal}>
          <Feather
            style={globalStyles.addDrugButton}
            name="plus-circle"
            size={30}
            color="#BB22B5"
          />
        </TouchableOpacity>
      </View>
      <Modal animationType="fade" visible={addDrugModalVisible} transparent>
        <View style={modalStyles.modalContainer}>
          <View
            style={[modalStyles.addDrugModalContent, globalStyles.bottomShadow]}
          >
            <View style={modalStyles.topCustomDrugBar}>
              <Text style={modalStyles.topCustomDrugBarText}>
                {" "}
                Add Custom Drug:
              </Text>
              <TouchableOpacity onPress={handleCloseAddDrugModal}>
                <AntDesign
                  name="close"
                  size={20}
                  color="white"
                  style={iconStyles.closeCustomDrugIcon}
                />
              </TouchableOpacity>
            </View>
            <ImageSelector retrieveImageURL={retrieveImageURL}></ImageSelector>
            <ScrollView>
              <TextInput
                style={styles.input}
                onChangeText={onChangeDrugName}
                placeholder="Drug Name"
                value={drugName}
              />
              <TextInput
                style={styles.input}
                onChangeText={onChangeDoseAmount}
                value={doseAmount}
                placeholder="Dose Amount"
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                onChangeText={onChangeDosageUnit}
                placeholder="Dosage Unit"
                value={dosageUnit}
              />
              <TextInput
                style={styles.input}
                onChangeText={onChangeDissolventAmount}
                value={dissolventAmount}
                placeholder="Dissolvent Amount"
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                onChangeText={onChangeDissolventUnit}
                placeholder="Dissovent Unit"
                value={dissolventUnit}
              />
              <TextInput
                style={styles.input}
                onChangeText={onChangeDiluteAmount}
                value={diluteAmount}
                placeholder="Dilute Amount"
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                onChangeText={onChangeDiluteUnit}
                placeholder="Dilute Unit"
                value={diluteUnit}
              />
              <TextInput
                style={styles.indicationsInput}
                onChangeText={onChangeIndications}
                placeholder="Indications"
                value={indications}
              />
            </ScrollView>
            <View style={globalStyles.addDrugButtonContainer}>
              <TouchableOpacity
                onPress={createDrug}
                style={globalStyles.addButton}
              >
                <Text style={globalStyles.whiteBoldText}>Add Drug</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 250,
    marginTop: 10,
    borderWidth: 2,
    borderColor: "#C4C4C4",
    padding: 10,
    borderRadius: 5,
  },
  indicationsInput: {
    height: 80,
    width: 250,
    marginTop: 10,
    borderWidth: 2,
    borderColor: "#C4C4C4",
    textAlign: "left",
    padding: 10,
    borderRadius: 5,
    paddingBottom: 50,
  },
});
