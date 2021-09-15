import { applyMiddleware, combineReducers, createStore } from "redux";

import AuthReducer from "./reducers/auth.reducer";
import PatientReducer from "./reducers/patients.reducer";
import thunk from 'redux-thunk'

const RootReducer = combineReducers({
  patientsRecords: PatientReducer,
  auth: AuthReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
