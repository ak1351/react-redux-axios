import * as actionTypes from "../actions/actionTypes";
const initialState = {
  user: {},
  isError: false
};
const CommentReducer = (state = { initialState }, action = {}) => {
  const newState = { ...state };

  switch (action.type) {
    case actionTypes.COMMENT_DETAILS:
      return { ...newState, user: { ...action.payload } };

    default:
      return { ...newState };
  }
};

export default CommentReducer;
