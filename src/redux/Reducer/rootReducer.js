import { productReducer } from "./productReducer";
import themeReducer from "./themeReducer";
import { userReducer } from "./userReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    theme: themeReducer,
    user: userReducer,
    products: productReducer
})
export default rootReducer;