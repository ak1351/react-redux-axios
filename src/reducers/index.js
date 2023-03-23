import { combineReducers } from "redux";
import PostReducer from "./PostReducer";
import LoginReducer from "./LoginReducer";
import CommentReducer from "./CommentReducer";
export default combineReducers({
  PostReducer,
  CommentReducer,
  LoginReducer
});
