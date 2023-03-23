import * as actiontypes from "./actionTypes";
import axios from "axios";

const request = axios.create({
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});

const getcomment= (commentid) => {
  
  return (dispatch) => {
    dispatch({
      type: actiontypes. COMMENT_DETAILS
    });
    request({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/comments?postId=" +commentid
      // params: {
      //   limit: 10
      // 
    }).then((response) => {
   
        dispatch({
          type: actiontypes. COMMENT_DETAILS,
          payload: response
        });
      
    });
  };
};

export default getcomment;