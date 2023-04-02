const { LOAD_PRODUCT, LOAD_CATEGORY, LOAD_CATPRODUCT } = require("../actionTypes/actionTypes");

const initialState = {
    cart: [],
    products: [],
    categories: [],
    catProducts: {}
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PRODUCT:
         
            return {
                ...state,
                products:action.payload
            }
        case LOAD_CATEGORY:
            return {
                ...state,
                categories:action.payload
            }
        case LOAD_CATPRODUCT:
            return {
                ...state,
                catProducts:action.payload
            }
            
    
        default:
            return state
    }
}