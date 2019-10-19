import { SET_MONITOR_STATE, SET_PLANET_IN_HAND } from "./orbitalView.actions";

export const MONITOR_STATE = {
  NORMAL: "normal",
  ZOOMED: "zoomed"
};

const initialState = {
  monitorState: MONITOR_STATE.NORMAL,
  planetInHand: null
};

export const orbitalViewReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MONITOR_STATE:
      return { ...state, monitorState: action.payload };
    case SET_PLANET_IN_HAND:
      return { ...state, planetInHand: action.payload };
    default:
      return state;
  }
};
