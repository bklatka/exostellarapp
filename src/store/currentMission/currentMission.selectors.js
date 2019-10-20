export const getCurrentMissionGoals = state => state.currentMission.goals;

export const getUnfilledMissions = state =>
  getCurrentMissionGoals(state).filter(goal => !goal.fullfilled);
