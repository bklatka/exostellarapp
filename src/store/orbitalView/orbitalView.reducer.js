import { SET_MONITOR_STATE } from "./orbitalView.actions";

export const MONITOR_STATE = {
  NORMAL: "normal",
  SELECTING: "selecting"
};

const initialState = {
  monitorState: MONITOR_STATE.NORMAL
};

export const orbitalViewReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MONITOR_STATE:
      return { ...state, monitorState: action.payload };
    default:
      return state;
  }
};
