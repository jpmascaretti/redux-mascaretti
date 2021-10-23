import React, { useCallback, useReducer } from "react";

import AuthScreenWrapper from "../../AuthScreenWrapper/AuthScreenWrapper";
import Input from "../../Input/Input";
import { LinearGradient } from "expo-linear-gradient";
import {
  TouchableOpacity,
  Alert,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { login } from "../../../store/actions/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import { globalStyles } from "../../../styles/globalStyles";
import { authStyles } from "../../../styles/authStyles";

const LOGIN_FORM_INPUT_UPDATE = "LOGIN_FORM_INPUT_UPDATE";

const loginFormReducer = (state, action) => {
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

  const loginErr = useSelector((state) => state.auth.loginError);
  const loadingActivity = useSelector((state) => state.auth.loadingStatus);

  const [loginFormState, loginFormDispatch] = useReducer(loginFormReducer, {
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
    if (loginFormState.formIsValid) {
      dispatch(
        login(
          loginFormState.inputValues.email,
          loginFormState.inputValues.password
        )
      );
    } else {
      Alert.alert("Invalid Form", "Enter valid email and password", [
        { text: "Ok" },
      ]);
    }
  };

  const onInputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      loginFormDispatch({
        type: LOGIN_FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [loginFormDispatch]
  );

  return (
    <LinearGradient
      colors={["#96EAEF", "white"]}
      style={authStyles.linearGradient}
    >
      {loadingActivity === "loading" ? (
        <View style={globalStyles.loaderContainer}>
          <ActivityIndicator size="large" color="#BB22B5" />
        </View>
      ) : (
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
          <TouchableOpacity
            style={authStyles.loginButton}
            onPress={handleSignUp}
          >
            <Text style={globalStyles.whiteBoldText}>Log In</Text>
          </TouchableOpacity>
          {loginErr && (
            <View>
              <Text style={authStyles.authError}>
                {loginErr.replace("_", " ").replace("_", " ")}
              </Text>
            </View>
          )}
        </AuthScreenWrapper>
      )}
    </LinearGradient>
  );
};

export default LoginScreen;
