import {
  SET_STAR_NAME,
  SET_STAR_SIZE,
  SET_STAR_TEMPERATURE,
  SET_STAR_TYPE
} from "./star.actions";
import { getStarTypes } from "../../starSettings";

const initialState = {
  name: "",
  type: getStarTypes()[0],
  sizePercent: 50,
  temperaturePercent: 50
};

export const starReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_STAR_NAME:
      return { ...state, name: action.payload };
    case SET_STAR_TYPE:
      return { ...state, type: action.payload };
    case SET_STAR_SIZE:
      return { ...state, sizePercent: action.payload };
    case SET_STAR_TEMPERATURE:
      return { ...state, temperaturePercent: action.payload };
    default:
      return state;
  }
};
