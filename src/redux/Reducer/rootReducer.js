import themeReducer from "./themeReducer";
import { userReducer } from "./userReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    theme: themeReducer,
    user:userReducer
})
export default rootReducer;