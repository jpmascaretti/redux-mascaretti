import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";
import DefaultHeader from "../../DefaultHeader/DefaultHeader";
import DosesTab from "../../BottomTabs/DosesTab";
import React from "react";
import { bottomNavStyles } from "../../../styles/bottomNavStyles";
import { globalStyles } from "../../../styles/globalStyles";
import { Picker } from "@react-native-picker/picker";

export default function Doses() {
  const [selectedDrug, setSelectedDrug] = useState("Select Drug");
  const [selectedForm, setSelectedForm] = useState("Select Form");

  return (
    <View style={globalStyles.safeAreaView}>
      <DefaultHeader />
      <View style={globalStyles.pickersView}>
        <Text style={selectedDrug === "Select Drug" ? styles.drugLabel : styles.drugLabelPink}>Drug</Text>
        <View style={selectedDrug === "Select Drug" ? globalStyles.pickersBox : globalStyles.pickersBoxPink}>
          <Picker
            style={styles.pickerBox}
            selectedValue={selectedDrug}
            mode="dropdown"
            onValueChange={(drugValue) => setSelectedDrug(drugValue)}
          >
            {/* Here I need to render Items according to each drug in the array */}
            <Picker.Item
              label="Select Drug"
              value="Select Drug"
              color="#C4C4C4"
            />
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <Text style={selectedForm === "Select Form" ? styles.formLabel : styles.formLabelPink}>Form</Text>
        <View style={selectedForm === "Select Form" ? globalStyles.pickersBox : globalStyles.pickersBoxPink}>
          <Picker
            style={styles.pickerBox}
            selectedValue={selectedForm}
            mode="dropdown"
            onValueChange={(formValue) => setSelectedForm(formValue)}
          >
            {/* Here I need to render Items according to each drug in the array */}
            <Picker.Item
              label="Select Form"
              value="Select Form"
              color="#C4C4C4"
            />
            <Picker.Item label="Form One" value="one" />
            <Picker.Item label="Form Two" value="two" />
          </Picker>
        </View>
      </View>
      <View style={bottomNavStyles.NavContainerFlex}>
        <View style={bottomNavStyles.NavContainer}>
          <DosesTab />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pickerBox: {
    flex: 1,
    alignSelf: "center",
    textAlign: "center",
    justifyContent: "center",
    width: "100%",
  },
  drugLabel: {
    alignSelf: "flex-start",
    marginLeft: "10%",
    color: "#C4C4C4",
  },
  formLabel: {
    marginTop: 15,
    alignSelf: "flex-start",
    marginLeft: "10%",
    color: "#C4C4C4",
  },
  drugLabelPink: {
    alignSelf: "flex-start",
    marginLeft: "10%",
    color: "#BB22B5",
  },
  formLabelPink: {
    marginTop: 15,
    alignSelf: "flex-start",
    marginLeft: "10%",
    color: "#BB22B5",
  },
});
