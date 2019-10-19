const VALIDATION_TYPES = {
  PLANET_TEMP: "atLeastOnePlanetTemp"
};

const mockGoals = [
  {
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
    default:
      return state;
  }
};
