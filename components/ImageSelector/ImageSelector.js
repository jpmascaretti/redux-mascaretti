import React, { useState } from "react";
import { View, Image, Text, StyleSheet, Alert, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native";


export const ImageSelector = (props) => {
  const [pickedUri, setPickedUri] = useState();

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== 'granted') {
        Alert.alert(
            'Insufficient camera permissions',
            'Please give access to camera to use the app feature',
            [{text: 'OK'}]
        )
        return false;
    }
    return true;
  }

  const handleTakePicture = async () => {
      const isCameraOK = await verifyPermissions();
      if (!isCameraOK) return;

      const image = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [16,9],
          quality: 0.8,
      })
      console.log(image)
      setPickedUri(image.uri)
      //from within this component I can pass the uri to parent component
      //call dispatch and send the url to the database and append the drug to druglist
      
  }

  return (
    <View style={styles.container}>
      <View style={!pickedUri ? styles.preview : styles.addedImage}>
        {!pickedUri ? (
          <>
          <TouchableOpacity onPress={handleTakePicture}>
          <MaterialCommunityIcons name="image-plus" size={56} color="#BB22B5" />
          <Text style={styles.addImageText}>Add Image</Text>
          </TouchableOpacity>
          </>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUri }}></Image>
        )}
      </View>
    </View>
  ); 
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  preview: {
    marginTop: 10,
    width: 260,
    height: 100,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'column',
    borderColor: "black",
    backgroundColor: "#C3F7FA",
    borderRadius: 15,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  addImageText: {
    fontSize: 16,
    color: '#BB22B5',
  },
  addedImage: {
    marginTop: 10,
    width: 260,
    height: 260,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'column',
    borderColor: "black",
    backgroundColor: "#C3F7FA",
    borderRadius: 15,
  }
});
