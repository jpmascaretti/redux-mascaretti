import { GET_FORMS } from "../actions/dosageform.actions";

const INITIAL_FORM_STATE = {
  drugs: []
};

const DosageFormReducer = (state = INITIAL_FORM_STATE, action) => {
    switch (action.type) {
      
      case GET_FORMS:
      
      return {
          forms: action.dosageFormList.forms,
        };
      default:
        return state;
    }
  };
  
  export default DosageFormReducer;