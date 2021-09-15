export const SAVE_PATIENT = "SAVE_PATIENT";
export const DELETE_PATIENT = "DELETE_PATIENT";

import { URL_API } from '../../constants/database'

export const deletePatient = (todeleteRecord) => ({
  type: DELETE_PATIENT,
  record: todeleteRecord,
});


export const savePatient = (inputPatientRecord) => {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_API}/patients.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: Date.now(),
          items: { ...inputPatientRecord },
        }),
      });

      const result = await response.json();

      console.log(result)

      dispatch({
        type: SAVE_PATIENT,
        record: inputPatientRecord,
      });
    } catch (error) {
      console.log(error.message);
      // dispatch({
      //   type: CONFIRM_CART,
      //   status: 'error',
      // });
    }
  }
}