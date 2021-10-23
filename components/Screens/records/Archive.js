import React from "react";
import RecordsTab from "../../BottomTabs/RecordsTab";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { bottomNavStyles } from "../../../styles/bottomNavStyles";
import { globalStyles } from "../../../styles/globalStyles";
import DefaultHeader from "../../DefaultHeader/DefaultHeader";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function Records({ route }) {
  const { patientName, patientGender } = route.params;
  const navigation = useNavigation();

  return (
    <View style={globalStyles.safeAreaView}>
      <DefaultHeader />
      <TouchableOpacity
        style={globalStyles.backToRecords}
        onPress={() => {
          navigation.navigate("Records");
        }}
      >
        <AntDesign name="arrowleft" size={24} color="#C4C4C4" />
        <Text style={globalStyles.btrText}>Back to Records</Text>
      </TouchableOpacity>

      <View style={styles.recordBannerBox}>
        <View
          style={
            patientGender === "male"
              ? styles.upperBanner
              : styles.upperBannerFemale
          }
        >
          {patientGender == "male" ? (
            <Ionicons name="md-male" size={30} color="white" />
          ) : (
            <Ionicons name="md-female" size={30} color="white" />
          )}
          <Text style={styles.patientRecordBannerText}>{patientName}</Text>
        </View>
        <View style={styles.belowBannerBox}>
        <ScrollView contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap", alignContent: "center", justifyContent: "flex-start"}}>
            <View style={styles.blackBox}></View>
            <View style={styles.blackBox}></View>
            <View style={styles.blackBox}></View>
            <View style={styles.blackBox}></View>
            <View style={styles.blackBox}></View>
            <View style={styles.blackBox}></View>
            <View style={styles.blackBox}></View>
            <View style={styles.blackBox}></View>
            <View style={styles.blackBox}></View>
            <View style={styles.blackBox}></View>
            <View style={styles.blackBox}></View>
            <View style={styles.blackBox}></View>
            <View style={styles.blackBox}></View>
            <View style={styles.blackBox}></View>
            <View style={styles.blackBox}></View>
            <View style={styles.blackBox}></View>
            <View style={styles.blackBox}></View>
            <View style={styles.blackBox}></View>
            <View style={styles.blackBox}></View>
            <View style={styles.blackBox}></View>
            <View style={styles.blackBox}></View>
            <View style={styles.blackBox}></View>
            <View style={styles.blackBox}></View>
            <View style={styles.blackBox}></View>
            <View style={styles.blackBox}></View>

        </ScrollView>
        </View>
      </View>

      <View style={bottomNavStyles.NavContainerFlex}>
        <View style={bottomNavStyles.NavContainer}>
          <RecordsTab />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  recordBannerBox: {
    width: "100%",
    height: "80%",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
    marginTop: 15,
  },
  upperBanner: {
    backgroundColor: "#96EAEF",
    width: "90%",
    height: 40,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  upperBannerFemale: {
    backgroundColor: "#FAA7F6",
    width: "90%",
    height: 40,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  recordBox: {
    width: "90%",
    height: "80%",
  },
  patientRecordBannerText: {
    fontSize: 16,
    color: "white",
    marginLeft: 10,
    fontWeight: "bold",
  },
  belowBannerBox: {
    borderWidth: 1,
    borderColor: "#C4C4C4",
    width: "90%",
    height: "80%",
    borderTopWidth: 0,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  blackBox: {
    width: 90,
    height: 70,
    backgroundColor: 'black',
    margin: 10,
    marginRight: 0,
    marginLeft: 20
  }
});
