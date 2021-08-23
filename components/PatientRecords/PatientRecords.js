import React, { useContext, useState } from "react";
import { RecordsContext } from "../../context/PatientsContext/PatientsContext";
import { Entypo, Ionicons, AntDesign } from "@expo/vector-icons";

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
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const { patientsList, setPatientsList } = useContext(RecordsContext);

  const [itemSelected, setItemSelected] = useState({});

  const handleConfirmDelete = () => {
    const id = itemSelected.id;
    setPatientsList(patientsList.filter((item) => item.id !== id));
    setDeleteModalVisible(false);
    setItemSelected({});
  };

  const handleModal = (id) => {
    setItemSelected(patientsList.find((item) => item.id === id));
    setDeleteModalVisible(true);
  };

  function handleCloseDeleteModal() {
     setDeleteModalVisible(false);
  }

  return (
    <View>
      <View style={styles.flexRow}>
        <FlatList
          data={patientsList}
          renderItem={(data) => {
            return (
              <View style={data.item.gender == 'male' ? [styles.item, styles.shadow] : [styles.itemFemale, styles.shadow]}>
                {data.item.gender == 'male' ? <Ionicons
                    name="md-male"
                    size={30}
                    color="#96EAEF"
                  /> : 
                  <Ionicons
                    name="md-female"
                    size={30}
                    color="#FAA7F6"
                  />}
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

      <Modal animationType="slide" visible={deleteModalVisible} transparent>
      
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent, styles.shadow]}>
          <TouchableOpacity onPress={handleCloseDeleteModal} >
               
               <AntDesign
                 name="close"
                 size={20}
                 color="#BB22B5"
                 style={styles.deleteCloseStyle} 
               />

             </TouchableOpacity>
            <Text style={styles.modalMessage}>
              Delete medical record of:
            </Text>
            <Text style={styles.modalTitle}>{itemSelected.name}</Text>
            <View>
              <Button onPress={handleConfirmDelete} title="CONFIRM" color="#BB22B5" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PatientRecords;

const styles = StyleSheet.create({
  deleteCloseStyle: {
    marginLeft: 220,
  },
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
    marginTop: 5,
    marginBottom: 5,
    width: 300,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#C4C4C4",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    borderTopWidth: 5,
    borderTopColor: "#96EAEF",
  },
  itemFemale: {
    padding: 10,  
    marginTop: 5,
    marginBottom: 5,
    width: 300,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#C4C4C4",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    borderTopWidth: 5,
    borderTopColor: "#FAA7F6",
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    padding: 10,
    backgroundColor: "white",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15
  },
  modalMessage: {
    fontSize: 18,
  },
  modalTitle: {
    fontSize: 26,
    marginTop: 10,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#C4C4C4'
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
