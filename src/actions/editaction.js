import axios from "axios"

import *as actionTypes from "./actionTypes"

const request = axios.create({
    headers:{
        
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        
    },
});

const editaction = (edata)=>{
   
    return(dispatch)=>{

        dispatch({
            type:actionTypes.EDIT_DETAILS
        });
    {fetch(`https://jsonplaceholder.typicode.com/posts`+`/`+edata.editid, {
        method: 'PUT',
        body: JSON.stringify({
          id: edata.editid,
          title: edata.editedtitle,
          body: edata.editedbody,
          userId: edata.edituserid,
        })
        ,headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) =>  dispatch({
            type:actionTypes.EDIT_DETAILS,
            payload: json
        }))}

    }

       
    }

export default editaction;