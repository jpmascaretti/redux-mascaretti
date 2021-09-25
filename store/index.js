import { applyMiddleware, combineReducers, createStore } from "redux";

import AuthReducer from "./reducers/auth.reducer";
import PatientReducer from "./reducers/patients.reducer";
import DrugReducer from "./reducers/drugs.reducer";

import thunk from "redux-thunk";
import DosageFormReducer from "./reducers/dosageform.reducer";
const RootReducer = combineReducers({
  patientsRecords: PatientReducer,
  auth: AuthReducer,
  drugs: DrugReducer,
  forms: DosageFormReducer
});

const store = createStore(RootReducer, applyMiddleware(thunk));
export default store;
