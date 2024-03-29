import {
  CLEAR_PLANET_FORM,
  EDIT_PLANET,
  RESET_PLANET,
  SET_PLANET_HUE_COLOR,
  SET_PLANET_NAME,
  SET_PLANET_SIZE,
  SET_PLANET_TEMPERATURE_ADJUSTMENT,
  SET_PLANET_TYPE
} from "./planet.actions";
import {
  calculatePlanetMassPercent,
  getPlanetTypes
} from "../../planetSettings";

export const initialState = {
  id: null,
  name: "",
  type: getPlanetTypes()[0],
  sizePercent: 50,
  temperatureAdjustment: 50,
  hueColor: "#00ffd8"
};

export const planetFormReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PLANET_NAME:
      return { ...state, name: action.payload };
    case SET_PLANET_TYPE:
      return { ...state, type: action.payload };
    case SET_PLANET_SIZE:
      return { ...state, sizePercent: action.payload };
    case SET_PLANET_TEMPERATURE_ADJUSTMENT:
      return { ...state, temperatureAdjustment: action.payload };
    case SET_PLANET_HUE_COLOR:
      return { ...state, hueColor: action.payload };
    case CLEAR_PLANET_FORM:
      return { ...initialState };
    case EDIT_PLANET:
      return createPlanetFormDataFromCurrentSystemPlanet(action.payload);
    case RESET_PLANET:
      return initialState;
    default:
      return state;
  }
};

const createPlanetFormDataFromCurrentSystemPlanet = planetInSystem => ({
  ...planetInSystem,
  sizePercent: calculatePlanetMassPercent(
    planetInSystem.type,
    planetInSystem.mass
  )
});
