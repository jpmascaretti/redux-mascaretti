import React, { useContext, useState } from "react";
import { RecordsContext } from "../../context/PatientsContext/PatientsContext";
import { Searchbar } from "react-native-paper";

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

const NewPatientRecord = () => {
  const { patientsList, setPatientsList, addPatient } =
    useContext(RecordsContext);

  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const [addPatientModalVisible, setAddPatientModalVisible] = useState(false);

  const [inputText, setInputText] = useState("");
  const [inputError, setInputError] = useState("");

  const handleChangeText = (text) => {
    setInputText(text);
    setInputError("");
  };

  const handleAddItem = () => {
    if (inputText) {
      addPatient({
        id: Math.random().toString(),
        name: inputText,
      });
      setInputText("");
      setInputError("");
    } else {
      setInputError("Required");
    }
  };

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

  const handleAddPatientModal = () => {
    setAddPatientModalVisible(true);
  };

  return (
    <View>
      {patientsList.length > 0 ? (
        <View style={styles.searchBarContainer}>
          <Searchbar
            placeholder="Search Patient"
            onChangeText={onChangeSearch}
            value={searchQuery}
            icon="magnify"
            style={styles.searchBar}
          />
        </View>
      ) : (
        <View>
        <Text style={styles.headline}>No patients found</Text>
        <Text style={styles.headlineBottom}>Please add patients to medical records </Text>
        </View>
      )}

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Agregar item"
          style={styles.input}
          onChangeText={handleChangeText}
          value={inputText}
        />
        <Button title="ADD" color="#3D9970" onPress={handleAddItem} />
      </View>
      <Text style={styles.inputError}>{inputError}</Text>
      <FlatList
        data={patientsList}
        renderItem={(data) => {
          return (
            <View style={[styles.item, styles.shadow]}>
              <Text>{data.item.name}</Text>
              <Button
                title="X"
                color="#AAAAAA"
                onPress={() => handleModal(data.item.id)}
              />
            </View>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />

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

export default NewPatientRecord;

const styles = StyleSheet.create({
    headline: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 15,
        width: 350,
        color: '#C4C4C4'
      },
      headlineBottom: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 0,
        width: 350,
        color: '#C4C4C4'
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
