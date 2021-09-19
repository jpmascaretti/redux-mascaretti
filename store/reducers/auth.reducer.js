import { LOGIN, SIGNUP } from "../actions/auth.actions";

const INITIAL_STATE = {
  token: null,
  userId: null,
  loginError: null,
  signupError: null,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        signupError: action.signupError,
      };
    case LOGIN:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        loginError: action.loginError,
      };
    default:
      return state;
  }
};

export default AuthReducer;
