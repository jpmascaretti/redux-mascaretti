import React, { useState } from "react";
import { globalStyles } from "../../styles/globalStyles";
import { Feather } from "@expo/vector-icons";
import { Text, View, TouchableOpacity, Modal } from "react-native";
import { modalStyles } from "../../styles/modalStyles";
import { AntDesign } from "@expo/vector-icons";
import { iconStyles } from "../../styles/iconStyles";
import { ImageSelector } from "../ImageSelector/ImageSelector";
import { ScrollView } from "react-native";
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
            <View style={modalStyles.topCustomDrugBar}>
              <Text style={modalStyles.topCustomDrugBarText}>
                {" "}
                Add Custom Drug:
              </Text>
              <TouchableOpacity onPress={handleCloseAddDrugModal}>
                <AntDesign
                  name="close"
                  size={20}
                  color="white"
                  style={iconStyles.closeCusomDrugIcon}
                />
              </TouchableOpacity>
            </View>
            <ImageSelector></ImageSelector>
            <ScrollView>
              <Text>hey</Text>
              <Text>hey</Text>
              <Text>hey</Text>
              <Text>hey</Text>
              <Text>hey</Text>
              <Text>hey</Text>

            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
};

{
  /* <View style={modalStyles.modalContainer}>
          <View
            style={[modalStyles.doseModalContent, globalStyles.bottomShadow]}
          >
            <View style={modalStyles.topDrugBar}>
              <Text style={modalStyles.topDugBarText}>{selectedDrug} {selectedForm}</Text>
              <TouchableOpacity onPress={handleCloseDoseModal}>
                <AntDesign
                  name="close"
                  size={20}
                  color="white"
                  style={modalStyles.closeIconStyleDoseModal}
                />
              </TouchableOpacity>
            </View> */
}
