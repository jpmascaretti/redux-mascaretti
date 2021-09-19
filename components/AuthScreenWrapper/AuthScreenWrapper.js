import {
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { authStyles } from "../../styles/authStyles";

const AuthScreenWrapper = ({
  children,
  title,
  message,
  buttonText,
  buttonPath,
}) => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView behavior="height" style={authStyles.screen}>
      <View style={authStyles.logoWrapper}>
        <View style={authStyles.screenlogo}>
          <FontAwesome name="eyedropper" size={45} color="black" />
          <Text style={authStyles.fontLogo}> DoSe+</Text>
        </View>
        <Text style={authStyles.sloganFont}> The all-in-one pediatric app</Text>
      </View>
      <View style={authStyles.container}>
        <Text style={authStyles.title}>{title}</Text>
        {children}
        <View style={authStyles.prompt}>
          <Text style={authStyles.promptMessage}>{message}</Text>
          <TouchableOpacity onPress={() => navigation.navigate(buttonPath)}>
            <Text style={authStyles.promptButton}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthScreenWrapper;
