export const GET_RECORD = "GET_RECORD";
export const ADD_RECORD = "ADD_RECORD";
import { URL_API } from "../../constants/database";

const filterRecordsByUserIDandPatient = (
  data,
  queryUserId,
  patientName,
  patientGender
) => {
  const records = [];
  !!data &&
    Object.keys(data).forEach((key) => records.push({ id: key, ...data[key] }));
  return records.filter(
    (item) =>
      item.authUserId === queryUserId &&
      item.patientName === patientName &&
      item.patientGender === patientGender
  );
};

export const getRecords = (userID, patientName, patientGender) => {
  //need to add loading patients status
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/records.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      const records = filterRecordsByUserIDandPatient(
        result,
        userID,
        patientName,
        patientGender
      );
      records.length === 0
        ? dispatch({
            type: GET_RECORD,
            recordList: [],
          })
        : dispatch({
            type: GET_RECORD,
            recordList: records[0].records,
          });
    } catch (error) {
      console.log(error);
      //need to add error handling logic here and render in UI
    }
  };
};

export const addRecord = (
  newRecord,
  oldRecordList,
  userID,
  patientName,
  patientGender
) => {
  return async (dispatch) => {
    const newRecordList = oldRecordList;
    newRecordList.push(newRecord);

    try {
      const response = await fetch(`${URL_API}/records.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      const records = filterRecordsByUserIDandPatient(
        result,
        userID,
        patientName,
        patientGender
      );

      if (records.length === 0) {
        try {
          const newRecord = await fetch(`${URL_API}/records.json`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              date: Date.now(),
              records: { ...newRecordList },
              authUserId: userID,
              patientName: patientName,
              patientGender: patientGender,
            }),
          });
        } catch (err) {
          throw err;
        }
      } else {
        try {
          const recordID = Object.keys(result)[0];
          const updateRecords = await fetch(
            `${URL_API}/records/${recordID}.json`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                date: Date.now(),
                records: { ...newRecordList },
                authUserId: userID,
              }),
            }
          );
        } catch (err) {
          throw err;
        }
      }
    } catch (error) {
      console.log(error);
      //need to add error handling logic here and render in UI
    }

    dispatch({
      type: ADD_RECORD,
      newRecordList: newRecordList,
    });
  };
};
