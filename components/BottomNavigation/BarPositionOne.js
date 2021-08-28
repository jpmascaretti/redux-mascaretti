// import Icon from "react-native-ico-material-design";
import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontAwesome5} from "@expo/vector-icons";


const BarPositionOne = ({page, setPage}) => {
    return (
        <View style={styles.NavBar}>
          <View style={styles.overlay}>
          <Pressable
            style={styles.IconSelected}
            android_ripple={{ borderless: true, radius: 50 }}
          >
            <FontAwesome5
              name="clipboard-list"
              size={25}
              color="#BB22B5"
            />
          </Pressable>
          </View>

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
          <Pressable
            onPress={() => setPage({
              recordsPage: false,
              dosesPage: false,
              testsPage: true,
            })}
            style={styles.IconBehave}
            android_ripple={{ borderless: true, radius: 50 }}
          >
            <FontAwesome5
              name="stethoscope"
              size={25}
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
    IconSelected: {
      marginTop: 2,
      padding: 14,
      paddingLeft: 18
    },
  });