import { GET_RECORD } from "../actions/records.actions";
import { ADD_RECORD } from "../actions/records.actions";

const INITIAL_RECORDS = {
  records: [],
};

const RecordsReducer = (state = INITIAL_RECORDS, action) => {
  switch (action.type) {
    case GET_RECORD:
      return {
        records: action.recordList,
      };

    case ADD_RECORD:
      return {
        records: action.newRecordList,
      };
    default:
      return state;
  }
};

export default RecordsReducer;
