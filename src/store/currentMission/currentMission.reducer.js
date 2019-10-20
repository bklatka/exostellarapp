import { VALIDATION_TYPES } from "../../utils/goals.service";
import {
  GOAL_FULFILLED,
  GOAL_NOT_FULFILLED,
  RESET_CURRENT_MISSION
} from "./currentMission.actions";

const mockGoals = [
  {
    id: 1,
    title: "Earth like",
    description: "Set temperature on at least one planet to min. 14C degrees",
    validation: [{ type: VALIDATION_TYPES.PLANET_TEMP, value: 14 }],
    fulfilled: false
  },
  {
    id: 2,
    title: "Brace yourself!",
    description:
      "Set temperature on at least one planet to no more then -20 degrees",
    validation: [{ type: VALIDATION_TYPES.PLANET_MAX_TEMP, value: -20 }],
    fulfilled: false
  }
];

const initialState = {
  goals: mockGoals
};

export const currentMissionReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GOAL_FULFILLED: {
      const fullfilledGoal = action.payload;
      const updatedGoals = [...state.goals].map(goal => {
        if (goal.id === fullfilledGoal.id) {
          return {
            ...goal,
            fullfilled: true
          };
        }
        return goal;
      });
      return { ...state, goals: updatedGoals };
    }
    case GOAL_NOT_FULFILLED: {
      const fullfilledGoal = action.payload;
      const updatedGoals = [...state.goals].map(goal => {
        if (goal.id === fullfilledGoal.id) {
          return {
            ...goal,
            fullfilled: false
          };
        }
        return goal;
      });
      return { ...state, goals: updatedGoals };
    }
    case RESET_CURRENT_MISSION:
      return initialState;

    default:
      return state;
  }
};
