import { GET_DRUGS } from "../actions/drugs.actions";
import { ADD_DRUG } from "../actions/drugs.actions";

const INITIAL_DRUG_STATE = {
  drugs: []
};

const DrugReducer = (state = INITIAL_DRUG_STATE, action) => {
    switch (action.type) {
      
      case GET_DRUGS:
      
      return {
          drugs: action.drugList.drugs,
        };

      case ADD_DRUG:

      return {
          drugs: action.newDrugList,
        };
      default:
        return state;
    }
  };
  
  export default DrugReducer;