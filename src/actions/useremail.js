import * as actiontypes from "./actionTypes";
import axios from "axios";

const request = axios.create({
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});

const getuser = (email) => {
  const cur_email = email;
  return (dispatch) => {
    dispatch({
      type: actiontypes.GET_PART_USER
    });
    request({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/users/7"
      // params: {
      //   limit: 10
      // }
    }).then((response) => {
      if (cur_email == response.data.email) {
        dispatch({
          type: actiontypes.GET_PART_USER,
          payload: response
        });
      }
    });
  };
};

export default getuser;
