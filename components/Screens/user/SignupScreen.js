import { Alert, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React, { useCallback, useReducer } from "react";
import AuthScreenWrapper from "../../AuthScreenWrapper/AuthScreenWrapper";
import { Button } from "react-native-elements";
import { COLORS } from "../../../constants/colors";
import Input from "../../Input/Input";
import { LinearGradient } from "expo-linear-gradient";
import { signup } from "../../../store/actions/auth.actions";
import { useDispatch } from "react-redux";
import { globalStyles } from "../../../styles/globalStyles";

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
          title="Sign up with your credentials"
          message="¿Already have a DoSe+ account?"
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

          <TouchableOpacity style={styles.buttonHover} onPress={handleSignUp}>
            <Text style={globalStyles.whiteBoldText}>Sign up</Text>
          </TouchableOpacity>
        </AuthScreenWrapper>
      </LinearGradient>
    </View>
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
    width: 80,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    shadowColor: "rgba(46, 229, 157, 0.7)",
    shadowOpacity: 1.5,
    elevation: 8,
    shadowRadius: 20,
    shadowOffset: { width: 1, height: 13 },
    backgroundColor: "#BB22B5",
    color: "#FFFFFF",
    alignSelf: "center",
  },
});

export default SignupScreen;
