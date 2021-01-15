import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cartReducer";

const root = combineReducers({
  user: userReducer,
  cart: cartReducer,
});
export default root;
