import React, { useState } from "react";
import { View, Button, Image, Text, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

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
      <View style={styles.preview}>
        {!pickedUri ? (
          <Text>NO hay imagen...</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUri }}></Image>
        )}
      </View>
      <Button title="Add Picture" color="red" onPress={handleTakePicture} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  preview: {
    width: 260,
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
