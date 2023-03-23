import * as user from "./actionTypes";
import axios from "axios";

const request = axios.create({
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});

const getuserList = () => {
  return (dispatch) => {
    dispatch({
      type: user.FETCH_USER_DETAILS
    });
    request({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/users/7/posts",
      
    })
      .then((response)  => {
        dispatch({
          type: user.FETCH_USER_DETAILS_SUCCESS,
          payload: response
        });
      })
      .catch((error) => {
        dispatch({
          type: user.FETCH_USER_DETAILS_FAILURE,
          payload: error
        });
      });
  };
};

export default getuserList;
