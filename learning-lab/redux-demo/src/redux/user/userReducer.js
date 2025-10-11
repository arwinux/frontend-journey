import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userTypes";

const initialState = {
  loading: false,
  data: [],
  error: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };

    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
}

//? fetch user is an Async action (side effect) => redux-thaung
//^ REQUEST
//* SUCCESS
//! FAILURE
