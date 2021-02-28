import { combineReducers } from "redux";
import { shopifyList } from "./shopifyApiReducer";
import { cartList } from "./cartReducer";

export default combineReducers({ shopifyList, cartList });
