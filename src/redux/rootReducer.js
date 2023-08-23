import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer"
import iceCreamReducer from "./iceCream/iceCreamReducer"
import penutReducer from "./penut/penutReducer";
import cookReducer from "./cook/cookReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    penut: penutReducer,
    cook: cookReducer,
    user: userReducer
})
export default rootReducer
