import { USER } from "../actionTypes/actionTypes";

export const currentUserSet = (data) => {
  return {
      type: USER,
      payload:data
  };
};
