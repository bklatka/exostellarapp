export const getCurrentSystemPlanets = state => state.currentSystem.planets;

export const getUnselectedPlanets = state =>
  getCurrentSystemPlanets(state).filter(planet => !planet.orbit);
export const getSelectedPlanets = state =>
  getCurrentSystemPlanets(state).filter(planet => planet.orbit);

export const getCurrentSystemOrbits = state => state.currentSystem.orbits;
