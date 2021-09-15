import React, { useCallback, useReducer } from "react";

import AuthScreenWrapper from "../../AuthScreenWrapper/AuthScreenWrapper";
import { Button } from "react-native-elements";
import Input from "../../Input/Input";
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
    <AuthScreenWrapper
      title="INGRESAR"
      message="¿Aún no tienes cuenta?"
      buttonText="Ir al registro"
      buttonPath="Signup"
    >
      <Input
        id="email"
        label="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        errorText="Por favor ingresa un email válido"
        required
        email
        onInputChange={onInputChangeHandler}
      />
      <Input
        id="password"
        label="Password"
        secureTextEntry
        autoCapitalize="none"
        errorText="wrong password"
        required
        minLength={6}
        onInputChange={onInputChangeHandler}
      />
      <Button
        title="REGISTRARME"
        onPress={handleSignUp}
        buttonStyle={styles.button}
      />
    </AuthScreenWrapper>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
