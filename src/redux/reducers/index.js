import { combineReducers } from "redux";
import cartData from "./cartData";
import darkMode from "./darkMode";
import data from './data';
import email from './email'
import particularDetail from "./particularDetail";
const store = combineReducers({
    fetchData:data,
    userEmail:email,
    particularDetail:particularDetail,
    cartData:cartData,
    darkMode:darkMode
})

export default store;

