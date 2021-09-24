export const SAVE_PATIENT = "SAVE_PATIENT";
export const DELETE_PATIENT = "DELETE_PATIENT";
export const GET_PATIENTS = "GET_PATIENTS";
import { URL_API } from "../../constants/database";

const filterByUserID = (data, queryUserId) => {
  const patients = [];
  Object.keys(data).forEach((key) => patients.push({ id: key, ...data[key] }));
  return patients.filter((item) => item.authUserId === queryUserId);
};



export const getPatients = (userID) => {
  //need to add loading patients status
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/patients.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      const patients = filterByUserID(result, userID);

      patients.length === 0 ?
        dispatch({
          type: GET_PATIENTS,
          patients: [],
        })
      : 
      dispatch({
        type: GET_PATIENTS,
        patients: patients,
      })

    } catch (error) {
      console.log(error);
      //need to add error handling logic here and render in UI
    }
  };
};

export const savePatient = (inputPatientRecord, userId) => {
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

      const newRecord = {
        authUserId: userId,
        date: Date.now(),
        id: result.name,
        items: { ...inputPatientRecord },
      }


      dispatch({
        type: SAVE_PATIENT,
        record: newRecord,
      });
    } catch (error) {
      console.log(error);
      //need to add error handling logic here and render in UI
    }
  };
};


export const deletePatient = (toDeleteRecord) => {
  //need to add loading patients status
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/patients/${toDeleteRecord.id}.json`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();


        dispatch({
          type: DELETE_PATIENT,
          toDeletePatient: toDeleteRecord,
        })

    } catch (error) {
      console.log(error);
      //need to add error handling logic here and render in UI
    }
  };
};