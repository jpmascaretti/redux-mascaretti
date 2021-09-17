import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { COLORS } from "../../constants/colors";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const AuthScreenWrapper = ({
  children,
  title,
  message,
  buttonText,
  buttonPath,
}) => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView behavior="height" style={styles.screen}>
      <View style={styles.logoWrapper}>
        <View style={styles.screenlogo}>
          <FontAwesome name="eyedropper" size={45} color="black" />
          <Text style={styles.fontLogo}> DoSe+</Text>
        </View>
        <Text style={styles.sloganFont}> The all-in-one pediatric app</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {children}
        <View style={styles.prompt}>
          <Text style={styles.promptMessage}>{message}</Text>
          <TouchableOpacity onPress={() => navigation.navigate(buttonPath)}>
            <Text style={styles.promptButton}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    marginBottom: 18,
    textAlign: "center",
    fontWeight: "bold",
    color: 'black',
  },
  container: {
    width: "80%",
    maxWidth: 400,
    padding: 12,
    margin: 12,
  },
  prompt: {
    alignItems: "center",
  },
  promptMessage: {
    marginTop: 10,
    fontSize: 16,
    color: "#000000",
  },
  promptButton: {
    marginTop: 5,
    fontSize: 16,
    color: '#BB22B5',
  },
  screenlogo: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  logoWrapper: {
    bottom: 50
  },
  fontLogo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#BB22B5'
  },
  sloganFont: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 30
  }
});

export default AuthScreenWrapper;
