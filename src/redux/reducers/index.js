import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer"; // Assuming you have this

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer, // Your existing product reducer
});

export default rootReducer;
