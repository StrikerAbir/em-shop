const { LOAD_PRODUCT, LOAD_CATEGORY, LOAD_CATPRODUCT, ADD_TO_CART, REMOVE_FROM_CART } = require("../actionTypes/actionTypes");

const initialState = {
    cart: [],
    products: [],
    categories: [],
    catProducts: {}
}

export const productReducer = (state = initialState, action) => {
     const selectedProduct = state.cart.find(
       (product) => product._id === action.payload._id
     );
    switch (action.type) {
      case LOAD_PRODUCT:
        return {
          ...state,
          products: action.payload,
        };
      case LOAD_CATEGORY:
        return {
          ...state,
          categories: action.payload,
        };
      case LOAD_CATPRODUCT:
        return {
          ...state,
          catProducts: action.payload,
        };

      case ADD_TO_CART:
        if (selectedProduct) {
          const newCart = state.cart.filter(
            (product) => product._id !== selectedProduct._id
          );
          selectedProduct.quantity = selectedProduct.quantity + 1;
          return {
            ...state,
            cart: [...newCart, selectedProduct],
          };
        }
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };

      case REMOVE_FROM_CART:
        if (selectedProduct.quantity > 1) {
          const newCart = state.cart.filter(
            (product) => product._id !== selectedProduct._id
          );
          selectedProduct.quantity = selectedProduct.quantity - 1;
          return {
            ...state,
            cart: [...newCart, selectedProduct],
          };
        }
        return {
          ...state,
          cart: state.cart.filter(
            (product) => product._id !== action.payload._id
          ),
        };

      default:
        return state;
    }
}