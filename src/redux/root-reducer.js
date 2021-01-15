import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

const root = combineReducers({
  user: userReducer,
});
export default root;
