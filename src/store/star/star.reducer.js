import { SET_STAR_MASS } from "./star.actions";

const initialState = {
  starMass: 1
};

export const starReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_STAR_MASS:
      return { ...state, starMass: action.payload };

    default:
      return state;
  }
};
