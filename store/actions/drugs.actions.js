export const GET_DRUGS = "GET_DRUGS";
import { Picker } from "react-native";
import { URL_API } from "../../constants/database";

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

        drugs.length > 0 && dispatch({
          type: GET_DRUGS,
          drugList: drugs[0],
        }) 

    } catch (error) {
      console.log(error);
      //need to add error handling logic here and render in UI
    }
  };
};
