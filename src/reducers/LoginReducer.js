import * as actiontypes from "../actions/actionTypes";
const initialState = {
  userinfo: {},
  isError: false
};
const LoginReducer = (state = { initialState }, action = {}) => {
  const newState = { ...state };

  switch (action.type) {
    case actiontypes.GET_PART_USER:
      return { ...newState, userinfo: { ...action.payload } };

    default:
      return { ...newState };
  }
};

export default LoginReducer;
