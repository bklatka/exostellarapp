export const getCurrentSystem = state => state.currentSystem;
export const getCurrentSystemPlanets = state => state.currentSystem.planets;

export const getUnselectedPlanets = state =>
  getCurrentSystemPlanets(state).filter(planet => !planet.orbit);
export const getSelectedPlanets = state =>
  getCurrentSystemPlanets(state).filter(planet => planet.orbit);

export const getCurrentSystemOrbits = state => state.currentSystem.orbits;

export const getCurrentSystemStar = state => state.currentSystem.star;

export const getCurrentSystemPlanet = planetId => state =>
  state.currentSystem.planets.find(planet => planet.id === planetId);
