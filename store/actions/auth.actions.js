import {URL_LOGIN_AUTH_API} from '../../constants/database'

export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";

export const signup = (email, password) => {
  return async (dispatch) => {
    const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBcLw7hAzYKC7PAYBnJWHTe2f-Run77gkw", {
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

    dispatch({
      type: SIGNUP,
      token: data.idToken,
      userId: data.localId,
    });
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
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

    if (!!data.error) {
        //note: now that I pass the error I need to render a message in the frontend
      dispatch({
        type: LOGIN,
        token: data.idToken,
        userId: data.localId,
        error: data.error.message,
      });
    } else {
      dispatch({
        type: LOGIN,
        token: data.idToken,
        userId: data.localId,
      });
    }
  };
};
