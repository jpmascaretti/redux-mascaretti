import { LOGIN, SIGNUP } from "../actions/auth.actions";

const INITIAL_STATE = {
  token: null,
  userId: null,
  error: null,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        error: action.error,
      };
    case LOGIN:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        error: action.error,
      };
    default:
      return state;
  }
};

export default AuthReducer;
