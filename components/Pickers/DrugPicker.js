import { Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/globalStyles";
import { Picker } from "@react-native-picker/picker";

const DrugPicker = ({ selectedDrug, setSelectedDrug, drugList }) => {
  return (
    <>
      <Text
        style={
          selectedDrug === "Select Drug"
            ? globalStyles.drugLabel
            : globalStyles.drugLabelPink
        }
      >
        Drug
      </Text>
      <View
        style={
          selectedDrug === "Select Drug"
            ? globalStyles.pickersBox
            : globalStyles.pickersBoxPink
        }
      >
        <Picker
          style={globalStyles.pickerBox}
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
        {drugList.map((element, i) => (
          <Picker.Item key={i} label={element.drug} value={element.drug} />
      ))}
        </Picker>
      </View>
    </>
  );
};

export default DrugPicker;


