import { combineReducers } from "redux";
import { starReducer } from "./star/star.reducer";
import { planetFormReducer } from "./planet/planet.reducer";
import { orbitalViewReducer } from "./orbitalView/orbitalView.reducer";

export default combineReducers({
  star: starReducer,
  planetForm: planetFormReducer,
  orbitalView: orbitalViewReducer
});
