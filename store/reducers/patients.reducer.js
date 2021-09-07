import { SAVE_PATIENT } from "../actions/patients.actions";

//could fetch patients from db to set an initial state
const patients = [];
const initialState = {
  list: patients,
};

const PatientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PATIENT:

        return {
            list: [...state.list, action.record],
        }
    default:
      return state;
  }
};

export default PatientReducer;
