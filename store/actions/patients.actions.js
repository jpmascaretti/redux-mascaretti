export const SAVE_PATIENT = "SAVE_PATIENT";
export const DELETE_PATIENT = "DELETE_PATIENT";
export const GET_PATIENTS = "GET_PATIENTS";
import { URL_API } from "../../constants/database";

const filterByUserID = (data, queryUserId) => {
  const patients = [];
  Object.keys(data).forEach((key) => patients.push({ id: key, ...data[key] }));
  // console.log(patients.filter((item) => item.authUserId === queryUserId))
  return patients.filter((item) => item.authUserId === queryUserId);
};

export const deletePatient = (todeleteRecord) => ({
  type: DELETE_PATIENT,
  record: todeleteRecord,
});

export const getPatients = (userID) => {
  //I can move this state to get the user ID so that I pass it as a function parameter from within the component
  //also will help eliminate duplicate code here
  // const state = store.getState();

  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/patients.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      // console.log(result)
      const patients = filterByUserID(result, userID);



      dispatch({
        type: GET_PATIENTS,
        patients: patients,
      });
    } catch (error) {
      console.log(error.message);
      //need to add error handling logic here
    }
  };
};

export const savePatient = (inputPatientRecord, userId) => {
  // const state = store.getState();

  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/patients.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: Date.now(),
          items: { ...inputPatientRecord },
          authUserId: userId,
        }),
      });

      const result = await response.json();

      dispatch({
        type: SAVE_PATIENT,
        record: inputPatientRecord,
      });
    } catch (error) {
      console.log(error.message);
      //need to add error handling logic here
      // dispatch({
      //   type: CONFIRM_CART,
      //   status: 'error',
      // });
    }
  };
};
