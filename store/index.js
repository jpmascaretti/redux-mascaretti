import { createStore, combineReducers } from "redux";

import PatientReducer from "./reducers/patients.reducer";

const RootReducer = combineReducers({
  patientsRecords: PatientReducer,
});

export default createStore(RootReducer);
