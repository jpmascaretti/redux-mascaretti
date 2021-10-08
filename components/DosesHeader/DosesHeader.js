import React, { useState } from "react";
import { globalStyles } from "../../styles/globalStyles";
import { Feather } from "@expo/vector-icons";
import { Text, View, TouchableOpacity, Modal } from "react-native";
import { modalStyles } from "../../styles/modalStyles";
import { AntDesign } from "@expo/vector-icons";
import { iconStyles } from "../../styles/iconStyles";
import { ImageSelector } from "../ImageSelector/ImageSelector";
export default DosesHeader = ({ handleOpenBackdrop, handleCloseBackdrop }) => {
  const [addDrugModalVisible, setAddDrugModalVisible] = useState(false);

  const handleAddDrugModal = () => {
    handleOpenBackdrop();
    setAddDrugModalVisible(true);
  };
  function handleCloseAddDrugModal() {
    handleCloseBackdrop();
    setAddDrugModalVisible(false);
  }
  return (
    <>
      <View style={globalStyles.drugsHeaderContainer}>
        <Text style={globalStyles.drugsHeaderText}>DoSe+</Text>
        <TouchableOpacity onPress={handleAddDrugModal}>
          <Feather
            style={globalStyles.addDrugButton}
            name="plus-circle"
            size={30}
            color="#BB22B5"
          />
        </TouchableOpacity>
      </View>
      <Modal animationType="fade" visible={addDrugModalVisible} transparent>
        <View style={modalStyles.modalContainer}>
          <View
            style={[modalStyles.addDrugModalContent, globalStyles.bottomShadow]}
          >
            <TouchableOpacity onPress={handleCloseAddDrugModal}>
              <AntDesign
                name="close"
                size={20}
                color="#BB22B5"
                style={iconStyles.closeIconStyle}
              />
            </TouchableOpacity>
            <ImageSelector></ImageSelector>
            <View style={globalStyles.addButtonContainer}>
              <TouchableOpacity style={globalStyles.addButton}>
                <Text style={globalStyles.whiteBoldText}>
                  Add Custom Drug Image
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};
