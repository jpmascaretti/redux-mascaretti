export const GET_DRUGS = "GET_DRUGS";
import { URL_API } from "../../constants/database";

import * as FileSystem from "expo-file-system";

export const ADD_DRUG = "ADD_DRUG";

const filterDrugsByUserID = (data, queryUserId) => {
  const drugs = [];
  Object.keys(data).forEach((key) => drugs.push({ id: key, ...data[key] }));
  return drugs.filter((item) => item.authUserId === queryUserId);
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

      drugs.length > 0 &&
        dispatch({
          type: GET_DRUGS,
          drugList: drugs[0],
        });
    } catch (error) {
      console.log(error);
      //need to add error handling logic here and render in UI
    }
  };
};

export const addCustomDrug = (newDrug, oldDrugList, imageURL) => {
  return async (dispatch) => {
    const fileName = imageURL.split("/").pop();
    const Path = FileSystem.documentDirectory + fileName;

    try {
      FileSystem.moveAsync({
        from: imageURL,
        to: Path,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }

    newDrug.imageURL = Path;
    const newDrugList = oldDrugList;
    newDrugList.push(newDrug);
    console.log(newDrug);

    dispatch({
      type: ADD_DRUG,
      newDrugList: newDrugList,
    });
  };
};
