import * as actionTypes from "./actionTypes";

function deletePost(userid) {
  return { type: actionTypes.DELETE_DETAILS, payload: userid };
}
export default deletePost;
