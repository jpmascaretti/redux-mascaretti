
import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

var iconHeight = 26;
var iconWidth = 26;

const BarPositionThree = ({ setPage }) => {
  return (
    <View style={styles.NavBar}>
      <Pressable
        onPress={() =>
          setPage({
            recordsPage: true,
            dosesPage: false,
            testsPage: false,
          })
        }
        style={styles.IconBehave}
        android_ripple={{ borderless: true, radius: 50 }}
      >
        <FontAwesome5
          name="clipboard-list"
          size={25}
          color="#C4C4C4"
        />
      </Pressable>

      <Pressable
        onPress={() => setPage({
          recordsPage: false,
          dosesPage: true,
          testsPage: false,
        })}
        style={styles.IconBehave}
        android_ripple={{ borderless: true, radius: 50 }}
      >
        <FontAwesome5
          name="syringe"
          size={25}
          color="#C4C4C4"
        />
      </Pressable>
      <View style={styles.overlay}>
        <Pressable
          style={styles.IconSelectedThree}
          android_ripple={{ borderless: true, radius: 50 }}
        >
          <FontAwesome5
            name="stethoscope"
            size={25}
            color="#BB22B5"
          />
        </Pressable>
      </View>
    </View>
  );
};

export default BarPositionThree;

const styles = StyleSheet.create({
  overlay: {
    height: 60,
    width: 60,
    backgroundColor: "#FFFFFF",
    borderTopColor: "#FFFFFF",
    borderBottomColor: "#FFFFFF",
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#96EAEF",
    margin: 0,
    padding: 0,
  },
  NavBar: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    width: "90%",
    justifyContent: "space-evenly",
    borderRadius: 40,
    borderColor: "#96EAEF",
    borderWidth: 2,
  },
  IconBehave: {
    marginTop: 2,
    padding: 14,
  },
  IconSelectedThree: {
    marginTop: 2,
    padding: 14,
    paddingLeft: 16
  },
});
