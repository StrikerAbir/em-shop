import themeReducer from "./themeReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    theme: themeReducer
})
export default rootReducer;