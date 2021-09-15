import { Alert, StyleSheet } from 'react-native';
import React, { useCallback, useReducer } from 'react';

import  AuthScreenWrapper  from '../../AuthScreenWrapper/AuthScreenWrapper';
import { Button } from 'react-native-elements';
import { COLORS } from '../../../constants/colors';
import Input from '../../Input/Input';
import { signup } from '../../../store/actions/auth.actions';
import { useDispatch } from 'react-redux';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const inputValues = {
      ...state.inputValues,
      [action.input]: action.value,
    }
    const inputValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    }
    let formIsValid = true;

    for (const key in inputValidities) {
      formIsValid = formIsValid && inputValidities[key];
    }

    return {
      formIsValid,
      inputValues,
      inputValidities,
    }
  }

  return state;
};

const SignupScreen = () => {
  const dispatch = useDispatch();
  const [formState, formDispatch] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: '', 
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  const handleSignUp = () => {
    if (formState.formIsValid) {
      dispatch(signup(formState.inputValues.email, formState.inputValues.password));
    } else {
      Alert.alert(
        'Formulario inválido',
        'Ingresa email y usuario válido',
        [{ text: 'Ok' }]
      );
    }
  }

  const onInputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
    formDispatch({
      type: FORM_INPUT_UPDATE,
      value: inputValue,
      isValid: inputValidity,
      input: inputIdentifier,
    });
  }, [formDispatch]);

  return (
    <AuthScreenWrapper
      title="REGISTRO"
      message="¿Ya tienes cuenta?"
      buttonText="Ingresar"
      buttonPath="Login"
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
        errorText="La contraseña debe ser mínimo 6 caracteres"
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
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    marginVertical: 20,
  },
});

export default SignupScreen;