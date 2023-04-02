import { LOAD_PRODUCT } from "../actionTypes/actionTypes"

export const loadProduct = (product) => {
    // console.log(product);
    return{
        type: LOAD_PRODUCT,
        payload: product
    }
}