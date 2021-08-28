import Icon from "react-native-ico-material-design";
import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

var iconHeight = 26;
var iconWidth = 26;

const BarPositionOne = () => {
    return (
        <View style={styles.NavBar}>
          <View style={styles.overlay}>
          <Pressable
            onPress={() => console.log("Icon 1")}
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
          </View>

          <Pressable
            onPress={() => console.log("Icon 2")}
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
          <Pressable
            onPress={() => console.log("Icon 3")}
            style={styles.IconBehave}
            android_ripple={{ borderless: true, radius: 50 }}
          >
            <Icon
              name="user-shape"
              height={iconHeight}
              width={iconWidth}
              color="#C4C4C4"
            />
          </Pressable>
        </View>
    )
}

export default BarPositionOne

const styles = StyleSheet.create({
    overlay: {
      height: 60,
      width: 60,
      backgroundColor: "#FFFFFF",
      borderTopColor: '#FFFFFF',
      borderBottomColor: '#FFFFFF',
      borderRadius: 100,
      borderWidth: 2,
      borderColor: "#96EAEF",
      margin: 0,
      padding: 0
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