import { Alert, View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useCallback, useReducer } from "react";
import AuthScreenWrapper from "../../AuthScreenWrapper/AuthScreenWrapper";
import Input from "../../Input/Input";
import { LinearGradient } from "expo-linear-gradient";
import { signup } from "../../../store/actions/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import { globalStyles } from "../../../styles/globalStyles";
import { authStyles } from "../../../styles/authStyles";

const SIGNUP_FORM_INPUT_UPDATE = "SIGNUP_FORM_INPUT_UPDATE";

const signupFormReducer = (state, action) => {
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

  const signupErr = useSelector((state) => state.auth.signupError);
  const loadingActivity = useSelector((state) => state.auth.loadingStatus);

  const [signupFormState, signupFormDispatch] = useReducer(signupFormReducer, {
    inputValues: {
      email: "",
      password: "",
      confirmpassword: "",
    },
    inputValidities: {
      email: false,
      password: false,
      confirmpassword: false,
    },
    formIsValid: false,
  });

  const handleSignUp = () => {
    if (signupFormState.formIsValid) {
      dispatch(
        signup(
          signupFormState.inputValues.email,
          signupFormState.inputValues.password
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
      signupFormDispatch({
        type: SIGNUP_FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [signupFormDispatch]
  );

  return (
    <View>
      <LinearGradient
        colors={["#96EAEF", "white"]}
        style={authStyles.linearGradient}
      >
        {loadingActivity === "loading" ?
          <View style={globalStyles.loaderContainer}>
            <ActivityIndicator size="large" color="#BB22B5" />
          </View> :
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
            <Input
              id="confirmpassword"
              label="Confirm Password"
              secureTextEntry
              autoCapitalize="none"
              errorText="Passwords do not match"
              required
              confirmpwd
              inputpwd={signupFormState.inputValues.password}
              minLength={6}
              onInputChange={onInputChangeHandler}
            />

            <TouchableOpacity
              style={authStyles.signupButton}
              onPress={handleSignUp}
            >
              <Text style={globalStyles.whiteBoldText}>Sign up</Text>
            </TouchableOpacity>
            {signupErr && (
              <View>
                <Text style={authStyles.authError}>
                  {signupErr.replace("_", " ")}
                </Text>
              </View>
            )}
          </AuthScreenWrapper>}
      </LinearGradient>
    </View>
  );
};

export default SignupScreen;
