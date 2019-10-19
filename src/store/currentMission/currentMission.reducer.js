import { VALIDATION_TYPES } from "../../utils/goals.service";
import { GOAL_FULFILLED } from "./currentMission.actions";

const mockGoals = [
  {
    id: 1,
    title: "Temp goal",
    description: "Set temperature on at least one planet to min. 14C degrees",
    validation: [{ type: VALIDATION_TYPES.PLANET_TEMP, value: 10 }],
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
    default:
      return state;
  }
};
