import { combineReducers } from "redux";
import { starReducer } from "./star/star.reducer";

export default combineReducers({
  star: starReducer
});
