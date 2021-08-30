import React from "react";
import { View, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { bottomNavStyles } from "../../styles/bottomNavStyles";

const BarPositionTwo = ({ setPage }) => {
  return (
    <View style={bottomNavStyles.NavBar}>
      <Pressable
        onPress={() =>
          setPage({
            recordsPage: true,
            dosesPage: false,
            testsPage: false,
          })
        }
        style={bottomNavStyles.IconBehave}
        android_ripple={{ borderless: true, radius: 50 }}
      >
        <FontAwesome5 name="clipboard-list" size={25} color="#C4C4C4" />
      </Pressable>
      <View style={bottomNavStyles.overlay}>
        <Pressable
          style={bottomNavStyles.IconSelectedTwo}
          android_ripple={{ borderless: true, radius: 50 }}
        >
          <FontAwesome5 name="syringe" size={25} color="#BB22B5" />
        </Pressable>
      </View>
      <Pressable
        onPress={() =>
          setPage({
            recordsPage: false,
            dosesPage: false,
            testsPage: true,
          })
        }
        style={bottomNavStyles.IconBehave}
        android_ripple={{ borderless: true, radius: 50 }}
      >
        <FontAwesome5 name="stethoscope" size={25} color="#C4C4C4" />
      </Pressable>
    </View>
  );
};

export default BarPositionTwo;
