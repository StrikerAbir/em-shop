const { LOAD_PRODUCT } = require("../actionTypes/actionTypes");

const initialState = {
    cart: [],
    products:[]
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PRODUCT:
            console.log(action.payload);
            return {
                ...state,
                products:action.payload
            }
            
    
        default:
            return state
    }
}