import { combineReducers } from "redux";
import { starReducer } from "./star/star.reducer";
import { orbitalViewReducer } from "./orbitalView/orbitalView.reducer";

export default combineReducers({
  star: starReducer,
  orbitalView: orbitalViewReducer
});
