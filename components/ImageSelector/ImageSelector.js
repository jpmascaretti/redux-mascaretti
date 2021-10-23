import React, { useState } from "react";
import { View, Image, Text, StyleSheet, Alert} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native";
import { iconStyles } from "../../styles/iconStyles";
import { globalStyles } from "../../styles/globalStyles";

export const ImageSelector = ({retrieveImageURL}) => {
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

      setPickedUri(image.uri)
      retrieveImageURL(image.uri)
      
  }

  return (
    <View style={globalStyles.imageContainer}>
      <View style={!pickedUri ? globalStyles.imagePreview : globalStyles.addedImage}>
        {!pickedUri ? (
          <>
          <TouchableOpacity onPress={handleTakePicture}>
          <MaterialCommunityIcons name="image-plus" size={56} color="#BB22B5" style={iconStyles.addImageIcon}/>
          <Text style={globalStyles.addImageText}>Add Image</Text>
          </TouchableOpacity>
          </>
        ) : (
          <Image style={globalStyles.image} source={{ uri: pickedUri }}></Image>
        )}
      </View>
    </View>
  ); 
};