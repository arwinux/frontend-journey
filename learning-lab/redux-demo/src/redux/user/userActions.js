import axios from "axios";
import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userTypes";

function fetchUsersRequest() {
  return {
    type: FETCH_USER_REQUEST,
  };
}

function fetchUsersSuccess(users) {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
}

function fetchUsersFailure(error) {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
}

export function fetchUsers() {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // dispatch({ type: FETCH_USER_SUCCESS, payload: res.data }))
        dispatch(fetchUsersSuccess(res.data));
      })
      .catch((err) => {
        // dispatch({ type: FETCH_USER_FAILURE, payload: err.message });
        dispatch(fetchUsersFailure(err.message));
      });
  };
}

//? think => past tense (thought) => delay (middleware)
