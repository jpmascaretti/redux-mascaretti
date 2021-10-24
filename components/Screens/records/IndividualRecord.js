import React from "react";
import RecordsTab from "../../BottomTabs/RecordsTab";
import { View, Text, TouchableOpacity } from "react-native";
import { bottomNavStyles } from "../../../styles/bottomNavStyles";
import { globalStyles } from "../../../styles/globalStyles";
import DefaultHeader from "../../DefaultHeader/DefaultHeader";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";

export default function IndividualRecord({ route }) {
  const { individualRecord, patientGender, patientName } = route.params;
  const navigation = useNavigation();

  return (
    <View style={globalStyles.safeAreaView}>
      <DefaultHeader />
      <TouchableOpacity
        style={globalStyles.backToRecords}
        onPress={() => {
          navigation.navigate("Archive", {
            patientName: patientName,
            patientGender: patientGender,
          });
        }}
      >
        <AntDesign name="arrowleft" size={24} color="#C4C4C4" />
        <Text style={globalStyles.btrText}>Back to Archive</Text>
      </TouchableOpacity>

      <View style={globalStyles.recordBannerBox}>
        <View
          style={
            patientGender === "male"
              ? globalStyles.upperBanner
              : globalStyles.upperBannerFemale
          }
        >
          {patientGender == "male" ? (
            <Ionicons
              style={globalStyles.genderIcon}
              name="md-male"
              size={30}
              color="white"
            />
          ) : (
            <Ionicons
              style={globalStyles.genderIcon}
              name="md-female"
              size={30}
              color="white"
            />
          )}
          <Text style={globalStyles.patientRecordBannerText}>
            {patientName}
          </Text>
        </View>
        <View style={globalStyles.displayBox}>
          <View style={globalStyles.recordDisplay}>
            <Text style={globalStyles.recordText}>Date: </Text>
            {individualRecord.recordDate && (
              <Text style={globalStyles.recordTextInfo}>
                {individualRecord.recordDate}
              </Text>
            )}
          </View>
          <View style={globalStyles.recordDisplay}>
            <Text style={globalStyles.recordText}>Weight (kg): </Text>
            {individualRecord.recordWeight && (
              <Text style={globalStyles.recordTextInfo}>
                {individualRecord.recordWeight}
              </Text>
            )}
          </View>
          <View style={globalStyles.recordDisplay}>
            <Text style={globalStyles.recordText}>Height (cm): </Text>
            {individualRecord.recordHeight && (
              <Text style={globalStyles.recordTextInfo}>
                {individualRecord.recordHeight}
              </Text>
            )}
          </View>
          <View style={globalStyles.recordDisplay}>
            <Text style={globalStyles.recordText}>Height (cm): </Text>
            {individualRecord.recordHeight && (
              <Text style={globalStyles.recordTextInfo}>
                {individualRecord.recordHeight}
              </Text>
            )}
          </View>
          <View style={globalStyles.recordDisplay}>
            <Text style={globalStyles.recordText}>Dose: </Text>
            {individualRecord.recordDose && (
              <Text style={globalStyles.recordTextInfo}>
                {individualRecord.recordDose}
              </Text>
            )}
          </View>
          <View style={globalStyles.recordDisplay}>
            <Text style={globalStyles.recordText}>Glasgow: </Text>
            {individualRecord.recordGlasgow && (
              <Text style={globalStyles.recordTextInfo}>
                {individualRecord.recordGlasgow}
              </Text>
            )}
          </View>
          <View style={globalStyles.recordDisplay}>
            <Text style={globalStyles.recordText}>Apgar: </Text>
            {individualRecord.recordApgar && (
              <Text style={globalStyles.recordTextInfo}>
                {individualRecord.recordApgar}
              </Text>
            )}
          </View>
        </View>
        <View style={globalStyles.observationsBox}>
          <ScrollView>
            <Text style={globalStyles.recordText}>Observations: </Text>
            {individualRecord.recordObservations && (
              <Text
                style={{
                  fontFamily: "pinyon-script-regular",
                  fontSize: 26,
                  marginLeft: 0,
                }}
              >
                {individualRecord.recordObservations}
              </Text>
            )}
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
