import { combineReducers } from "redux";
import { starReducer } from "./star/star.reducer";
import { planetFormReducer } from "./planet/planet.reducer";
import { orbitalViewReducer } from "./orbitalView/orbitalView.reducer";
import { currentSystemReducer } from "./currentSystem/currentSystem.reducer";
import { currentMissionReducer } from "./currentMission/currentMission.reducer";
import { modalReducer } from "./modal/modal.reducer";

export default combineReducers({
  starForm: starReducer,
  planetForm: planetFormReducer,
  orbitalView: orbitalViewReducer,
  currentSystem: currentSystemReducer,
  currentMission: currentMissionReducer,
  modal: modalReducer
});
