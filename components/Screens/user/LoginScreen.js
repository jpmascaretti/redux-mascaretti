import React, { useCallback, useReducer } from "react";

import AuthScreenWrapper from "../../AuthScreenWrapper/AuthScreenWrapper";
import { Button } from "react-native-elements";
import {COLORS} from "../../../constants/colors"
import Input from "../../Input/Input";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import { login } from "../../../store/actions/auth.actions";
import { useDispatch } from "react-redux";

const LOGIN_FORM_INPUT_UPDATE = "LOGIN_FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === LOGIN_FORM_INPUT_UPDATE) {
    const inputValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    return {
      inputValues,
    };
  }
  return state;
};

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [formState, formDispatch] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
  });

  const handleSignUp = () => {
    dispatch(
      login(formState.inputValues.email, formState.inputValues.password)
    );
  };

  const onInputChangeHandler = useCallback(
    (inputIdentifier, inputValue) => {
      formDispatch({
        type: LOGIN_FORM_INPUT_UPDATE,
        value: inputValue,
        input: inputIdentifier,
      });
    },
    [formDispatch]
  );

  return (
    <LinearGradient
    colors={["#96EAEF", "white"]}
    style={styles.linearGradient}
  >
    <AuthScreenWrapper
      title="Log In"
      message="¿Don't have a Dose+ account?"
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
      <Button
        title="Log In"
        onPress={handleSignUp}
        buttonStyle={styles.button}
      />
    </AuthScreenWrapper>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
    button: {
      backgroundColor: COLORS.primary,
      marginVertical: 20,
    },
    linearGradient: {
      width: "100%",
      height: "100%",
    },
  });

export default LoginScreen;
