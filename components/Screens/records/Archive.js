import React, { useState } from "react";
import RecordsTab from "../../BottomTabs/RecordsTab";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import { bottomNavStyles } from "../../../styles/bottomNavStyles";
import { globalStyles } from "../../../styles/globalStyles";
import DefaultHeader from "../../DefaultHeader/DefaultHeader";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function Records({ route }) {
  const { patientName, patientGender } = route.params;
  const navigation = useNavigation();
  const [displayRecordCreation, setDisplayRecordCreation] = useState(false);
  const [individualPatientRecords, setIndividualPatientRecords] = useState([]);

  const [recordDate, setRecordDate] = useState(null);
  const [recordWeight, setRecordWeight] = useState(null);
  const [recordHeight, setRecordHeight] = useState(null);
  const [recordDose, setRecordDose] = useState(null);
  const [recordApgar, setRecordApgar] = useState(null);
  const [recordGlasgow, setRecordGlasgow] = useState(null);
  const [recordObservations, setRecordObservations] = useState(null);

  function createIndividualPatientRecord() {
    const newIndividualRecord = {
      recordDate: recordDate,
      recordWeight: recordWeight,
      recordHeight: recordHeight,
      recordDose: recordDose,
      recordApgar: recordApgar,
      recordGlasgow: recordGlasgow,
      recordObservations: recordObservations,
    };
    individualPatientRecords.push(newIndividualRecord);
    setIndividualPatientRecords(individualPatientRecords);
    console.log(individualPatientRecords[0]);
    cancelCreateRecordForm();
  }
  function cancelCreateRecordForm() {
    setDisplayRecordCreation(false);
    setRecordDate(null);
    setRecordWeight(null);
    setRecordHeight(null);
    setRecordDose(null);
    setRecordApgar(null);
    setRecordGlasgow(null);
    setRecordObservations(null);
  }

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
            <Ionicons
              style={styles.genderIcon}
              name="md-male"
              size={30}
              color="white"
            />
          ) : (
            <Ionicons
              style={styles.genderIcon}
              name="md-female"
              size={30}
              color="white"
            />
          )}
          <Text style={styles.patientRecordBannerText}>{patientName}</Text>
          <TouchableOpacity onPress={() => setDisplayRecordCreation(true)}>
            <AntDesign
              style={styles.folderIcon}
              name="addfolder"
              size={30}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <View
          style={
            displayRecordCreation
              ? styles.belowBannerBoxRecord
              : styles.belowBannerBox
          }
        >
          {displayRecordCreation ? (
            <ScrollView
              keyboardShouldPersistTaps={"handled"}
              contentContainerStyle={{
                flexDirection: "column",
                flexWrap: "nowrap",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <TextInput
                style={styles.recordInput}
                onChangeText={setRecordDate}
                placeholder="Date (DD/MM/YYYY)"
                value={recordDate}
              />
              <TextInput
                style={styles.recordInput}
                onChangeText={setRecordWeight}
                value={recordWeight}
                placeholder="Weight (cm)"
                keyboardType="numeric"
              />
              <TextInput
                style={styles.recordInput}
                onChangeText={setRecordHeight}
                value={recordHeight}
                placeholder="Height (cm)"
                keyboardType="numeric"
              />
              <TextInput
                style={styles.recordInput}
                onChangeText={setRecordDose}
                value={recordDose}
                placeholder="Dose"
              />
              <TextInput
                style={styles.recordInput}
                onChangeText={setRecordGlasgow}
                value={recordGlasgow}
                placeholder="Glasgow Result"
              />
              <TextInput
                style={styles.recordInput}
                onChangeText={setRecordApgar}
                value={recordApgar}
                placeholder="Apgar Result"
              />
              <TextInput
                style={styles.observationsInput}
                onChangeText={setRecordObservations}
                value={recordObservations}
                placeholder="Observations"
                multiline
                numberOfLines={4}
              />
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => cancelCreateRecordForm()}
                >
                  <Text style={globalStyles.whiteBoldText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.createRecordButton}
                  onPress={() => createIndividualPatientRecord()}
                >
                  <Text style={globalStyles.whiteBoldText}>Create Record</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          ) : individualPatientRecords.length > 0 ? (
            <ScrollView
              contentContainerStyle={{
                flexDirection: "row",
                flexWrap: "wrap",
                alignContent: "center",
                justifyContent: "flex-start",
              }}
            >
              {individualPatientRecords.map((record, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() =>
                    navigation.navigate("IndividualRecord", {
                      individualRecord: record,
                      patientName: patientName,
                      patientGender: patientGender,
                    })
                  }
                >
                  <View style={styles.recordFolder}>
                    <Text style={styles.recordFolderText}>
                      {record.recordDate}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          ) : (
            <Text>Please Create Patient Record</Text>
          )}
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
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  belowBannerBoxRecord: {
    borderWidth: 1,
    borderColor: "#C4C4C4",
    width: "90%",
    height: "65%",
    borderTopWidth: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  recordFolder: {
    width: 90,
    height: 60,
    borderWidth: 1,
    borderTopWidth: 8,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderColor: "#C4C4C4",
    margin: 10,
    marginRight: 0,
    marginLeft: 20,
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  recordFolderText: {
    fontWeight: "bold",
    color: "#C4C4C4",
  },
  genderIcon: {
    marginLeft: 10,
  },
  folderIcon: {
    marginLeft: 180,
  },
  recordInput: {
    height: 40,
    width: "80%",
    marginTop: 10,
    borderWidth: 2,
    borderColor: "#C4C4C4",
    padding: 10,
    borderRadius: 5,
    marginLeft: 30,
  },
  observationsInput: {
    height: 80,
    width: "80%",
    marginTop: 10,
    borderWidth: 2,
    borderColor: "#C4C4C4",
    padding: 10,
    borderRadius: 5,
    marginLeft: 30,
    textAlignVertical: "top",
  },
  buttonContainer: {
    alignSelf: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 10,
  },
  cancelButton: {
    backgroundColor: "red",
    height: 40,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10,
  },
  createRecordButton: {
    backgroundColor: "#BB22B5",
    height: 40,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginLeft: 10,
    marginBottom: 10,
  },
});
