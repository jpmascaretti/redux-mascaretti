export const GET_DRUGS = "GET_PATIENTS";
import { URL_API } from "../../constants/database";

const filterDrugsByUserID = (data, queryUserId) => {
    const patients = [];
    Object.keys(data).forEach((key) => patients.push({ id: key, ...data[key] }));
    return patients.filter((item) => item.authUserId === queryUserId);
  };


export const getDrugs = (userID) => {
    //need to add loading drugs status
    return async (dispatch) => {
      try {
        const response = await fetch(`${URL_API}/drugs.json`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        const result = await response.json();
        const drugs = filterDrugsByUserID(result, userID);
        
        console.log(drugs)
        dispatch({
          type: GET_DRUGS,
          drugList: drugs,
        });
      } catch (error) {
        console.log(error);
        //need to add error handling logic here and render in UI
      }
    };
  };