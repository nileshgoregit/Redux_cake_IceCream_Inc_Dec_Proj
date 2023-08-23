import axios from "axios";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./userTypes";


export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};


export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};


export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

//  async actions
//  its doesnt have to pure

export const fetchUsers = () => {
  return (dispatch) => {
    // for loading
    dispatch(fetchUserRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        // if success data
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        // if failure than error msg
        dispatch(fetchUserFailure(errorMsg));
      });
  };
};
