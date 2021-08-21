import React, { useContext, useState } from "react";
import { RecordsContext } from "../../context/PatientsContext/PatientsContext";

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
  const { addPatient } = useContext(RecordsContext);

  const [inputText, setInputText] = useState("");
  const [inputError, setInputError] = useState("");

  const handleChangeText = (text) => {
    setInputText(text);
    setInputError("");
  };

  function combinedPress() {
    handleAddItem,
    props.close
}
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



  return (
    <View>

      <View style={styles.inputContainer}>
          <Text style={styles.formText}>Name:</Text>
        <TextInput
          placeholder=" Patient Name"
          style={styles.input}
          onChangeText={handleChangeText}
          value={inputText}
        />

      </View>
      <Text style={styles.inputError}>{inputError}</Text>
      <View style={styles.addButtonContainer}>
             <TouchableOpacity onPress={handleAddItem} style={styles.addButton}> 
             <Text>Add Patient</Text>
             </TouchableOpacity>
        </View>
    </View>
  );
};

export default NewPatientRecord;

const styles = StyleSheet.create({
    addButtonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      },
    formText: {
        fontWeight: 'bold'
    },
    addButton: {
        backgroundColor: "#BB22B5",
        height: 30,
        width: 120,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
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
