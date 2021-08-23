import React, { useContext, useState } from "react";
import { RecordsContext } from "../../context/PatientsContext/PatientsContext";
import { Entypo, Ionicons } from "@expo/vector-icons";

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

const PatientRecords = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const { patientsList, setPatientsList } = useContext(RecordsContext);

  const [itemSelected, setItemSelected] = useState({});

  const handleConfirmDelete = () => {
    const id = itemSelected.id;
    setPatientsList(patientsList.filter((item) => item.id !== id));
    setModalVisible(false);
    setItemSelected({});
  };

  const handleModal = (id) => {
    setItemSelected(patientsList.find((item) => item.id === id));
    setModalVisible(true);
  };

  return (
    <View>
      <View style={styles.flexRow}>
        <FlatList
          data={patientsList}
          renderItem={(data) => {
            return (
              <View style={[styles.item, styles.shadow]}>
                <Ionicons
                    name="md-male"
                    size={30}
                    color="#96EAEF"
                  />
                <Text style={styles.patientName}>{data.item.name}</Text>
                <TouchableOpacity onPress={() => handleModal(data.item.id)}>
                <Entypo
                    name="dots-three-vertical"
                    size={20}
                    color="#C4C4C4"
                    style={styles.closeStyle}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      <Modal animationType="slide" visible={modalVisible} transparent>
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent, styles.shadow]}>
            <Text style={styles.modalMessage}>
              ¿Está seguro que desea borrar?
            </Text>
            <Text style={styles.modalTitle}>{itemSelected.name}</Text>
            <View>
              <Button onPress={handleConfirmDelete} title="CONFIRMAR" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PatientRecords;

const styles = StyleSheet.create({
  patientName: {
    color: '#C4C4C4',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center'
  },
  flexRow: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  headline: {
    textAlign: "center", // <-- the magic
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 15,
    width: 350,
    color: "#C4C4C4",
  },
  headlineBottom: {
    textAlign: "center", // <-- the magic
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 0,
    width: 350,
    color: "#C4C4C4",
  },
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
    marginTop: 80,
  },
  item: {
    padding: 10,  
    marginTop: 10,
    marginBottom: 10,
    width: 300,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#C4C4C4",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    borderTopWidth: 4,
    borderTopColor: "#96EAEF",
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
