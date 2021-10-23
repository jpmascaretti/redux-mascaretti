export const GET_FORMS = "GET_FORMS";
import { URL_API } from "../../constants/database";

const filterFormsByUserID = (data, queryUserId) => {
  const forms = [];
  Object.keys(data).forEach((key) => forms.push({ id: key, ...data[key] }));
  return forms.filter((item) => item.authUserId === queryUserId);
};

export const getForms = (userID) => {
  //need to add loading drugs status
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/dosageforms.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      const forms = filterFormsByUserID(result, userID);
      //   console.log(forms)

      forms.length > 0 &&
        dispatch({
          type: GET_FORMS,
          dosageFormList: forms[0],
        });
    } catch (error) {
      console.log(error);
      //need to add error handling logic here and render in UI
    }
  };
};
