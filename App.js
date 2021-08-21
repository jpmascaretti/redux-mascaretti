import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Feather, AntDesign } from "@expo/vector-icons";
import NewPatientRecord from "./components/NewPatientRecord/NewPatientRecord";
import PatientsContext from "./context/PatientsContext/PatientsContext";

import {
  StyleSheet,
  TextInput,
  Button,
  Text,
  View,
  FlatList,
  Modal,
  TouchableOpacity,
} from "react-native";
import RecordSearch from "./components/RecordSearch/RecordSearch";
import PatientRecords from "./components/PatientRecords/PatientRecords";

export default function App() {

  const [addPatientModalVisible, setAddPatientModalVisible] = useState(false);
  const handleAddPatientModal = () => {
    setAddPatientModalVisible(true);
  };

  function handleCloseAddPatientModal() {
    setAddPatientModalVisible(false);
  }

  return (
    <PatientsContext>
      <View style={styles.screen}>
        <StatusBar backgroundColor="#BB22B5" style="light" />
        <View style={styles.upperBar}>
          <TouchableOpacity onPress={handleAddPatientModal}>
            <Feather
              name="file-plus"
              size={32}
              color="#BB22B5"
              style={styles.iconStyle}
            />
          </TouchableOpacity>
          <Text style={styles.doseText}>DoSe+</Text>
        </View>
        <RecordSearch></RecordSearch>
        <Modal animationType="fade" visible={addPatientModalVisible} transparent>
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent, styles.shadow]}>
          <TouchableOpacity onPress={handleCloseAddPatientModal}>
          <AntDesign
              name="close"
              size={32}
              color="#BB22B5"
              style={styles.iconStyle}
            />
          </TouchableOpacity>
          <NewPatientRecord ></NewPatientRecord>
          </View>
        </View>
      </Modal>
      <PatientRecords></PatientRecords>
      </View>
    </PatientsContext>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 15,
    borderColor: "#C4C4C4",
    borderWidth: 3,
    height: 40,
    borderRadius: 40,
    width: 300,
  },
  searchBarContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  screen: {
    paddingTop: 62,
    backgroundColor: "white",
    flex: 1,
  },
  iconStyle: {
    alignSelf: "center",
    marginLeft: 8,
  },
  doseText: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "white",
    fontSize: 26,
    alignContent: "center",
    marginLeft: 117,
  },
  upperBar: {
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#96EAEF",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 200,
  },
  inputError: {
    color: "red",
  },
  items: {
    marginTop: 20,
  },
  item: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    padding: 30,
    backgroundColor: "white",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  modalMessage: {
    fontSize: 18,
  },
  modalTitle: {
    fontSize: 30,
    marginTop: 10,
    marginBottom: 20,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
