import React, { useState } from "react";
import { Entypo, Ionicons, AntDesign } from "@expo/vector-icons";
import { globalStyles } from "../../styles/globalStyles";
import { modalStyles } from "../../styles/modalStyles";
import { useSelector, useDispatch } from "react-redux";
import { deletePatient } from "../../store/actions/patients.actions";
import {
  Button,
  Text,
  View,
  FlatList,
  Modal,
  TouchableOpacity,
} from "react-native";

const PatientRecords = () => {
  const patientsList = useSelector((state) => state.patientsRecords.list);

  const dispatch = useDispatch();

  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const [patientSelected, setPatientSelected] = useState({});

  const handleConfirmDelete = () => {
    dispatch(deletePatient(patientSelected));
    setDeleteModalVisible(false);
    setPatientSelected({});
  };

  const handleModal = (id) => {
    setPatientSelected(patientsList.find((item) => item.id === id));
    setDeleteModalVisible(true);
  };

  function handleCloseDeleteModal() {
    setDeleteModalVisible(false);
  }

  return (
    <>
      <View style={globalStyles.listColumn}>
        <FlatList
          data={patientsList}
          renderItem={(data) => {
            return (
              <View
                style={
                  data.item.gender == "male"
                    ? [globalStyles.item, globalStyles.bottomShadow]
                    : [globalStyles.itemFemale, globalStyles.bottomShadow]
                }
              >
                {data.item.gender == "male" ? (
                  <Ionicons name="md-male" size={30} color="#96EAEF" />
                ) : (
                  <Ionicons name="md-female" size={30} color="#FAA7F6" />
                )}
                <Text style={globalStyles.patientName}>{data.item.name}</Text>
                <TouchableOpacity onPress={() => handleModal(data.item.id)}>
                  <Entypo
                    name="dots-three-vertical"
                    size={20}
                    color="#C4C4C4"
                    style={globalStyles.closeIconStyle}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      <Modal animationType="slide" visible={deleteModalVisible} transparent>
        <View style={modalStyles.modalContainer}>
          <View style={[modalStyles.modalContent, globalStyles.bottomShadow]}>
            <TouchableOpacity onPress={handleCloseDeleteModal}>
              <AntDesign
                name="close"
                size={20}
                color="#BB22B5"
                style={globalStyles.deleteCloseStyle}
              />
            </TouchableOpacity>
            <Text style={modalStyles.modalMessage}>
              Delete medical record of:
            </Text>
            <Text style={modalStyles.modalTitle}>{patientSelected.name}</Text>
            <View>
              <Button
                onPress={handleConfirmDelete}
                title="CONFIRM"
                color="#BB22B5"
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default PatientRecords;
