
import { LOGOUT, USER } from "../actionTypes/actionTypes";

const initialState = {
    currentUser:[]
}

export const userReducer=(state=initialState, action) => {
     switch (action.type) {
       case USER:
         const user = action.payload;
             return { currentUser: [user] };
         
         case LOGOUT: {
             return{currentUser:[]}
    }

       default:
         return state;
     }
}
