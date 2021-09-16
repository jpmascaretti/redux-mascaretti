import { Alert, StyleSheet, View } from "react-native";
import React, { useCallback, useReducer } from "react";

import AuthScreenWrapper from "../../AuthScreenWrapper/AuthScreenWrapper";
import { Button } from "react-native-elements";
import { COLORS } from "../../../constants/colors";
import Input from "../../Input/Input";
import { LinearGradient } from "expo-linear-gradient";
import { signup } from "../../../store/actions/auth.actions";
import { useDispatch } from "react-redux";

const SIGNUP_FORM_INPUT_UPDATE = "SIGNUP_FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === SIGNUP_FORM_INPUT_UPDATE) {
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

const SignupScreen = () => {
  const dispatch = useDispatch();
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
        signup(formState.inputValues.email, formState.inputValues.password)
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
        type: SIGNUP_FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [formDispatch]
  );

  return (
    <View>
      <LinearGradient
        colors={["#96EAEF", "white"]}
        style={styles.linearGradient}
      >
        <AuthScreenWrapper
          title="Sign Up"
          message="¿Already have a Dose+ account?"
          buttonText="Log In"
          buttonPath="Login"
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
            errorText="Password must have at least 6 characters"
            required
            minLength={6}
            onInputChange={onInputChangeHandler}
          />
          <Button
            title="Sign Up"
            onPress={handleSignUp}
            buttonStyle={styles.button}
          />
        </AuthScreenWrapper>
      </LinearGradient>
    </View>
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

export default SignupScreen;
