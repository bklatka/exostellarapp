import { testReducer } from "./test.reducer";
import { combineReducers } from "redux";
import { starReducer } from "../star/star.reducer";

export default combineReducers({
  test: testReducer,
  star: starReducer
});
