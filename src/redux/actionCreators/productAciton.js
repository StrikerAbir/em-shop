import { LOAD_CATEGORY, LOAD_CATPRODUCT, LOAD_PRODUCT } from "../actionTypes/actionTypes"

export const loadProduct = (product) => {
    // console.log(product);
    return{
        type: LOAD_PRODUCT,
        payload: product
    }
}

export const loadCategory = (category) => {
    // console.log(category);
    return {
        type: LOAD_CATEGORY,
        payload:category
    }
}
export const loadCatProduct = (categoryP) => {
    console.log(categoryP);
    return {
        type: LOAD_CATPRODUCT,
        payload:categoryP
    }
}