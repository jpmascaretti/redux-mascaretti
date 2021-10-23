import { LOGIN, SIGNUP } from "../actions/auth.actions";

const INITIAL_STATE = {
  token: null,
  userId: null,
  loginError: null,
  signupError: null,
  loadingStatus: 'inactive'
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        signupError: action.signupError,
        loadingStatus: action.loading
      };
    case LOGIN:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        loginError: action.loginError,
        loadingStatus: action.loading
      };
    default:
      return state;
  }
};

export default AuthReducer;
