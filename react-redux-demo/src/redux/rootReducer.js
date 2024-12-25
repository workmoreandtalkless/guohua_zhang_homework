import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";

const rootReducer = combineReducers({ // combine reducers
    cake: cakeReducer,
    iceCream: iceCreamReducer
});

export default rootReducer; // export combined reducer