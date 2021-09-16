import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { COLORS } from '../../constants/colors';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const AuthScreenWrapper = ({ children, title, message, buttonText, buttonPath }) => {
  const navigation = useNavigation();
  return (

    <KeyboardAvoidingView
      behavior="height"
      style={styles.screen}
    >
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
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  title: {
    fontSize: 24,
    marginBottom: 18,
    textAlign: 'center',
  },
  container: {
    width: '80%',
    maxWidth: 400,
    padding: 12,
    margin: 12,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
  },
  prompt: {
    alignItems: 'center',
  },
  promptMessage: {
    fontSize: 16,
    color: '#333',
  },
  promptButton: {
    fontSize: 16,
    color: COLORS.primary,
  },

});

export default AuthScreenWrapper;