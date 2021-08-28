import Icon from "react-native-ico-material-design";
import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import BarPositionOne from "./BarPositionOne";
import BarPositionTwo from "./BarPositionTwo";

var iconHeight = 26;
var iconWidth = 26;

const TabBar = () => {
  const [bottomIconSelected, setBottomIconSeleted] = useState({
    icon1: false,
    icon2: false,
    icon3: false,
  });

  return (
    <View style={styles.NavContainerFlex}>
      <View style={styles.NavContainer}>
        <BarPositionTwo/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  NavContainerFlex: {
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 4,
  },
  NavContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 20,
  },
});

export default TabBar;
