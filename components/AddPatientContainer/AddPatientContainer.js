import React, { useState } from "react";
import { globalStyles } from "../../styles/globalStyles";
import { iconStyles } from "../../styles/iconStyles";
import { Feather, AntDesign } from "@expo/vector-icons";
import { modalStyles } from "../../styles/modalStyles";
import AddPatientForm from "../AddPatientForm/AddPatientForm";

import { Text, View, Modal, TouchableOpacity } from "react-native";

export default AddPatientContainer = () => {
  const [addPatientModalVisible, setAddPatientModalVisible] = useState(false);
  const handleAddPatientModal = () => {
    setAddPatientModalVisible(true);
  };

  function handleCloseAddPatientModal() {
    setAddPatientModalVisible(false);
  }

  return (
    <View>
      <View style={globalStyles.upperBar}>
        <TouchableOpacity onPress={handleAddPatientModal}>
          <Feather
            name="file-plus"
            size={32}
            color="#BB22B5"
            style={iconStyles.addPatientIconStyle}
          />
        </TouchableOpacity>
        <Text style={globalStyles.doseText}>DoSe+</Text>
      </View>
      <Modal animationType="fade" visible={addPatientModalVisible} transparent>
        <View style={modalStyles.modalContainer}>
          <View style={[modalStyles.modalContent, globalStyles.bottomShadow]}>
            <TouchableOpacity onPress={handleCloseAddPatientModal}>
              <AntDesign
                name="close"
                size={20}
                color="#BB22B5"
                style={iconStyles.closeIconStyle}
              />
            </TouchableOpacity>
            <AddPatientForm />
          </View>
        </View>
      </Modal>
    </View>
  );
};
