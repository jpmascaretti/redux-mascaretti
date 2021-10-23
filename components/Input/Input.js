import React, { useEffect, useReducer } from "react";
import { Text, TextInput, View } from "react-native";
import { globalStyles } from "../../styles/globalStyles";


const INPUT_CHANGE = "INPUT_CHANGE";
const INPUT_BLUR = "INPUT_BLUR";

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
      };
    case INPUT_BLUR:
      return {
        ...state,
        touched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, inputDispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
    touched: false,
  });

  const { onInputChange, id } = props;

  useEffect(() => {
    onInputChange(id, inputState.value, inputState.isValid);
  }, [onInputChange, id, inputState]);

  const handleChangeText = (text) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;

    if (props.required && text.trim().length === 0) isValid = false;
    if (props.email && !emailRegex.test(text.toLowerCase())) isValid = false;
    if (props.minLength && text.length < props.minLength) isValid = false;
    if (props.confirmpwd & (props.inputpwd !== text)) isValid = false;
    inputDispatch({
      type: INPUT_CHANGE,
      value: text,
      isValid: isValid,
    });
  };

  const handleBlur = () => inputDispatch({ type: INPUT_BLUR });

  return (
    <View style={globalStyles.validationFormControl}>
      <Text style={globalStyles.validationLabel}>{props.label}</Text>
      <TextInput
        {...props}
        style={globalStyles.validationInput}
        value={inputState.value}
        onChangeText={handleChangeText}
        onBlur={handleBlur}
      />
      {!inputState.isValid && inputState.touched && (
        <View>
          <Text style={globalStyles.validationErrorText}>{props.errorText}</Text>
        </View>
      )}
    </View>
  );
};


export default Input;
