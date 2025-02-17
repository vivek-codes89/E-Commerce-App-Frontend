import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import { productReducer } from "./productReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer, // Add productReducer here
});

export default rootReducer;
