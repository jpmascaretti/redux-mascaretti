import { SAVE_PATIENT, DELETE_PATIENT } from "../actions/patients.actions";

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
