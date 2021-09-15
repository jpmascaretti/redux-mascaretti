import { URL_LOGIN_AUTH_API } from '../../constants/database';
import { URL_SIGNUP_AUTH_API } from '../../constants/database';

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';


export const signup = (email, password) => {
  return async dispatch => {
    const response = await fetch(URL_SIGNUP_AUTH_API, {
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
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
  }
}


export const login = (email, password) => {
    return async dispatch => {
      const response = await fetch(URL_LOGIN_AUTH_API, {
        method: 'POST',
        header: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });
  
      const data = await response.json();

      if(data.error.message) {
        //need to create error handler to pass it by adding a field to LOGIN that will be error: null and
        //and set it to error: ERROR_MESSAGE
      } else{
        dispatch({
            type: LOGIN,
            token: data.idToken,
            userId: data.localId,
          });
      }
      
    }
  }