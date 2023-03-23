import axios from "axios";

import * as actionTypes from "./actionTypes";

const request = axios.create({
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});

const Addaction = (postdata) => {
  console.log(postdata, "this is for add post ");
  return (dispatch) => {
    dispatch({
      type: actionTypes.ADD_POST
    });
    {
      fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: "POST",
        body: JSON.stringify({
          title: postdata.postTitle,
          body: postdata.postBody,
          userId: 7
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then((response) => response.json())
        .then((json) =>
          dispatch({
            type: actionTypes.ADD_POST,
            payload: json
          })
        );
    }
  };
};

export default Addaction;
