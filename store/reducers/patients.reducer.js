import {
  DELETE_PATIENT,
  SAVE_PATIENT,
  GET_PATIENTS,
} from "../actions/patients.actions";

const patients = [];

const initialState = {
  list: patients,
};

const PatientReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case SAVE_PATIENT:
      return {
        list: [...state.list, action.record],
      };

    case GET_PATIENTS:
      return {
        list: [...action.patients],
      };
    case DELETE_PATIENT:
      const updatedList = [...state.list].filter(
        (record) => record.id !== action.record.id
      );
      return {
        list: updatedList,
      };

    default:
      return state;
  }
};

export default PatientReducer;
