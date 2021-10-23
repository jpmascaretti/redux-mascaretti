import React from "react";
import { View, Switch, Text } from "react-native";
import { globalStyles } from "../../styles/globalStyles";

const Banner = ({ bannerText, switchEnabled, setSwitchEnabled }) => {
  const toggleSwitch = () =>
    setSwitchEnabled((previousState) => !previousState);

  return (
    <View style={switchEnabled ? globalStyles.banner : globalStyles.bannerOff}>
      <View style={globalStyles.switchTextContainer}>
        <Switch
          trackColor={{ false: "#767577", true: "#EDCFEE" }}
          thumbColor={switchEnabled ? "#dd41e0" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={switchEnabled}
        />
        <Text style={globalStyles.bannerText}>{bannerText}</Text>
      </View>
    </View>
  );
};

export default Banner;
