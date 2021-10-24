import React, { useState, useEffect } from "react";
import RecordsTab from "../../BottomTabs/RecordsTab";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { bottomNavStyles } from "../../../styles/bottomNavStyles";
import { globalStyles } from "../../../styles/globalStyles";
import DefaultHeader from "../../DefaultHeader/DefaultHeader";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addRecord } from "../../../store/actions/records.actions";
import { getRecords } from "../../../store/actions/records.actions";

export default function Records({ route }) {
  const { patientName, patientGender } = route.params;
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const individualPatientRecords = useSelector(
    (state) => state.records.records
  );
  const userID = useSelector((state) => state.auth.userId);

  useEffect(() => {
    dispatch(getRecords(userID, patientName, patientGender));
  }, []);

  const [displayRecordCreation, setDisplayRecordCreation] = useState(false);

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
    dispatch(
      addRecord(
        newIndividualRecord,
        individualPatientRecords,
        userID,
        patientName,
        patientGender
      )
    );
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
          <TouchableOpacity onPress={() => setDisplayRecordCreation(true)}>
            <AntDesign
              style={globalStyles.folderIcon}
              name="addfolder"
              size={30}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <View
          style={
            displayRecordCreation
              ? globalStyles.belowBannerBoxRecord
              : globalStyles.belowBannerBox
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
                style={globalStyles.recordInput}
                onChangeText={setRecordDate}
                placeholder="Date (DD/MM/YYYY)"
                value={recordDate}
              />
              <TextInput
                style={globalStyles.recordInput}
                onChangeText={setRecordWeight}
                value={recordWeight}
                placeholder="Weight (kg)"
                keyboardType="numeric"
              />
              <TextInput
                style={globalStyles.recordInput}
                onChangeText={setRecordHeight}
                value={recordHeight}
                placeholder="Height (cm)"
                keyboardType="numeric"
              />
              <TextInput
                style={globalStyles.recordInput}
                onChangeText={setRecordDose}
                value={recordDose}
                placeholder="Dose"
              />
              <TextInput
                style={globalStyles.recordInput}
                onChangeText={setRecordGlasgow}
                value={recordGlasgow}
                placeholder="Glasgow Result"
              />
              <TextInput
                style={globalStyles.recordInput}
                onChangeText={setRecordApgar}
                value={recordApgar}
                placeholder="Apgar Result"
              />
              <TextInput
                style={globalStyles.observationsInput}
                onChangeText={setRecordObservations}
                value={recordObservations}
                placeholder="Observations"
                multiline
                numberOfLines={4}
              />
              <View style={globalStyles.buttonContainer}>
                <TouchableOpacity
                  style={globalStyles.cancelButton}
                  onPress={() => cancelCreateRecordForm()}
                >
                  <Text style={globalStyles.whiteBoldText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={globalStyles.createRecordButton}
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
                  <View style={globalStyles.recordFolder}>
                    <Text style={globalStyles.recordFolderText}>
                      {record.recordDate}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          ) : (
            <View style={globalStyles.addRecordView}>
              <Text style={globalStyles.createRecordText}>
                Please Create Patient Record
              </Text>
            </View>
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
