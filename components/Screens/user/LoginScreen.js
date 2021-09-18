import React, { useCallback, useReducer } from "react";

import AuthScreenWrapper from "../../AuthScreenWrapper/AuthScreenWrapper";
import Input from "../../Input/Input";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, TouchableOpacity, Alert, Text, View } from "react-native";
import { login } from "../../../store/actions/auth.actions";
import { useDispatch } from "react-redux";
import { globalStyles } from "../../../styles/globalStyles";
import { useSelector } from "react-redux";

const LOGIN_FORM_INPUT_UPDATE = "LOGIN_FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === LOGIN_FORM_INPUT_UPDATE) {
    const inputValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const inputValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let formIsValid = true;

    for (const key in inputValidities) {
      formIsValid = formIsValid && inputValidities[key];
    }

    return {
      formIsValid,
      inputValues,
      inputValidities,
    };
  }
  return state;
};

const LoginScreen = () => {
  const dispatch = useDispatch();

  const loginErr = useSelector((state) => state.auth.error);

  const [formState, formDispatch] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,

    },
    formIsValid: false,
  });

  const handleSignUp = () => {

    if (formState.formIsValid) {
      dispatch(
        login(formState.inputValues.email, formState.inputValues.password)
      );
    } else {
      Alert.alert("Invalid Form", "Enter valid email and password", [
        { text: "Ok" },
      ]);
    }
  };


  const onInputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      formDispatch({
        type: LOGIN_FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [formDispatch]
  );

  return (
    <LinearGradient colors={["#96EAEF", "white"]} style={styles.linearGradient}>
      <AuthScreenWrapper
        title="Log in with your credentials"
        message="¿Don't have a DoSe+ account?"
        buttonText="Sign Up"
        buttonPath="Signup"
      >
        <Input
          id="email"
          label="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          errorText="Please enter valid email"
          required
          email
          onInputChange={onInputChangeHandler}
        />
        <Input
          id="password"
          label="Password"
          secureTextEntry
          autoCapitalize="none"
          errorText="Wrong password"
          required
          minLength={6}
          onInputChange={onInputChangeHandler}
        />
        <TouchableOpacity style={styles.buttonHover} onPress={handleSignUp}>
          <Text style={globalStyles.whiteBoldText}>Log In</Text>
        </TouchableOpacity>
        {loginErr && (
          <View>
            <Text style={styles.loginError}>{loginErr.replace('_', ' ')}</Text>
          </View>
        )}
      </AuthScreenWrapper>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#BB22B5",
    marginVertical: 20,
  },
  linearGradient: {
    width: "100%",
    height: "100%",
  },
  buttonHover: {
    marginTop: 20,
    borderRadius: 5,
    height: 40,
    width: 60,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    shadowColor: "rgba(46, 229, 157, 0.7)",
    shadowOpacity: 1.5,
    elevation: 8,
    shadowRadius: 20,
    shadowOffset: { width: 1, height: 13 },
    backgroundColor: "#BB22B5",
    color: "#FFFFFF",
    alignSelf: "center",
  },
  loginError: {
    alignSelf: 'center',
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    marginTop: 10,
  }
});

export default LoginScreen;
