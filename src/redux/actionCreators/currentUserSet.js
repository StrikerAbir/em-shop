import { LOGOUT, USER } from "../actionTypes/actionTypes";

export const currentUserSet = (data) => {
  return {
      type: USER,
      payload:data
  };
};
export const logoutUser = () => {
    return {
        type:LOGOUT
    }
}