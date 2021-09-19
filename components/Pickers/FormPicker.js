import { Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/globalStyles";
import { Picker } from "@react-native-picker/picker";

const FormPicker = ({ selectedForm, setSelectedForm }) => {
  return (
    <>
      <Text
        style={
          selectedForm === "Select Form"
            ? globalStyles.formLabel
            : globalStyles.formLabelPink
        }
      >
        Form
      </Text>
      <View
        style={
          selectedForm === "Select Form"
            ? globalStyles.pickersBox
            : globalStyles.pickersBoxPink
        }
      >
        <Picker
          style={globalStyles.pickerBox}
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
    </>
  );
};

export default FormPicker;

