import {
  URL_LOGIN_AUTH_API,
  URL_SIGNUP_AUTH_API,
  URL_API,
} from "../../constants/database";

export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";

import { drugs } from "../../constants/drugs";
import { dosageform } from "../../constants/dosageform";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const signup = (email, password) => {
  return async (dispatch) => {
    dispatch({
      type: SIGNUP,
      loading: 'loading'
    })
    try {
      const response = await fetch(URL_SIGNUP_AUTH_API, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      const data = await response.json();

      if (!!data.error) {
        dispatch({
          type: SIGNUP,
          token: null,
          userId: null,
          signupError: data.error.message,
          loading: 'loaded'
        });
      } else {
        try {
          const drugResponse = await fetch(`${URL_API}/drugs.json`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              date: Date.now(),
              authUserId: data.localId,
              drugs: drugs,
            }),
          });

          const drugResult = await drugResponse.json();
        } catch (error) {
          console.log(error.message);
        }
        try {
          const formResponse = await fetch(`${URL_API}/dosageforms.json`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              date: Date.now(),
              authUserId: data.localId,
              forms: dosageform,
            }),
          });
        } catch (error) {
          console.log(error.message);
        }

        await AsyncStorage.setItem("@token", data.idToken);
        await AsyncStorage.setItem("@userId", data.localId);

        dispatch({
          type: SIGNUP,
          token: data.idToken,
          userId: data.localId,
          loading: 'loaded'
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const login = (email, password) => {
  return async (dispatch) => {

    dispatch({
      type: LOGIN,
      loading: 'loading'
    }
    )
    const response = await fetch(URL_LOGIN_AUTH_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });

    const data = await response.json();

    !!data.error
      ? dispatch({
          type: LOGIN,
          token: data.idToken,
          userId: data.localId,
          loginError: data.error.message,
          loading: 'loaded'
        })
      : dispatch({
          type: LOGIN,
          token: data.idToken,
          userId: data.localId,
          loading: 'loaded'
        });
  };
};

export const persistentAuthentication = () => {
  return async (dispatch) => {
    const token = await AsyncStorage.getItem("@token");
    const userId = await AsyncStorage.getItem("@userId");

    if (token !== null && userId !== null) {
      dispatch({
        type: SIGNUP,
        token: token,
        userId: userId,
      });
    }
  };
};
