import React from "react";
import { CheckBox } from "react-native-elements";
import { globalStyles } from "../../styles/globalStyles";

import { Text, View } from "react-native";

export default GenderCheckboxes = ({
  maleSelected,
  femaleSelected,
  handleMaleCheckbox,
  handleFemaleCheckbox,
}) => {
  return (
    <View style={globalStyles.checkBoxes}>
      <Text style={globalStyles.blackBoldText}>Gender:</Text>
      <CheckBox
        checked={maleSelected}
        checkedColor="#BB22B5"
        onPress={handleMaleCheckbox}
        containerStyle={globalStyles.checkBox}
      />
      <Text>Male</Text>
      <CheckBox
        checked={femaleSelected}
        checkedColor="#BB22B5"
        onPress={handleFemaleCheckbox}
        containerStyle={globalStyles.checkBox}
      />
      <Text>Female</Text>
    </View>
  );
};
