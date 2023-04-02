import { ADD_TO_CART, LOAD_CATEGORY, LOAD_CATPRODUCT, LOAD_PRODUCT, REMOVE_FROM_CART } from "../actionTypes/actionTypes"

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

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};

export const removeFromCart = (data) => {
  return {
    type: REMOVE_FROM_CART,
    payload: data,
  };
};