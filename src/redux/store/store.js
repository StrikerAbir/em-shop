import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "../Reducer/rootReducer";
import thunk from "redux-thunk";
const { createStore, applyMiddleware } = require("redux");

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
export default store;