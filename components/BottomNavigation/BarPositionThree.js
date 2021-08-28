import Icon from "react-native-ico-material-design";
import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

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
        <Icon
          name="favorite-heart-button"
          height={iconHeight}
          width={iconWidth}
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
        <Icon
          name="chat-bubble"
          height={iconHeight}
          width={iconWidth}
          color="#C4C4C4"
        />
      </Pressable>
      <View style={styles.overlay}>
        <Pressable
          style={styles.IconBehave}
          android_ripple={{ borderless: true, radius: 50 }}
        >
          <Icon
            name="user-shape"
            height={iconHeight}
            width={iconWidth}
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
});
