import * as actiontypes from "./actiontypes";

function deletePost(userid) {
  return { type: actiontypes.DELETE_DETAILS, payload: userid };
}
export default deletePost;
