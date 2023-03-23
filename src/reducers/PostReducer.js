import * as actionTypes from "../actions/actionTypes";
const initialState = {
  user: {},
  isError: false
};
const PostReducer = (state = { initialState }, action = {}) => {
  const newState = { ...state };
  switch (action.type) {
    case actionTypes.FETCH_UESR_DETAILS:
      return { ...newState };
    case actionTypes.FETCH_USER_DETAILS_SUCCESS:
      return { ...newState, user: { ...action.payload } };

    case actionTypes.FETCH_USER_DETAILS_FAILURE:
      return { ...newState, user: { ...newState.user }, isError: true };
    case actionTypes.ADD_POST:
      return {
        ...newState,
        user: { data: [...newState?.user?.data.concat({ ...action.payload })] }
      };
    case actionTypes.DELETE_DETAILS:
      return {
        ...newState,
        user: {
          data: [
            ...newState?.user?.data.filter(
              (post) => post.id !== action.payload?.userid
            )
          ]
        }
      };
    case actionTypes.EDIT_DETAILS:
      return {
        ...newState,
        user: {
          data: [
            ...newState?.user?.data.map((item) =>
              item.id == action.payload?.id
                ? {
                    ...item,
                    title: action.payload?.title,
                    body: action.payload?.body
                  }
                : item
            )
          ]
        }
      };

    default:
      return { ...newState };
  }
};

export default PostReducer;
