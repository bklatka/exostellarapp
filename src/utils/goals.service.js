import { calculateTemperature, kelvinToCelcius } from "./temperature";

export const VALIDATION_TYPES = {
  PLANET_TEMP: "atLeastOnePlanetTemp"
};

// returns value in AU
const calculatePlanetDistance = fromOrbit => fromOrbit / 4;

const getPlanetTemperature = (planet, star) => {
  const distanceFromStar = calculatePlanetDistance(planet.orbit);
  // TODO: map bondAlbedo and greenhgouse effect
  return calculateTemperature(star.mass, distanceFromStar, 0.29, 1);
};

const hasPlanetWithMinTemp = (minTempValue, currentSystem) => {
  const { planets, star } = currentSystem;

  return !!planets
    .filter(planet => planet.orbit)
    .find(planet => {
      const tempOnPlanet = kelvinToCelcius(getPlanetTemperature(planet, star));
      return tempOnPlanet >= minTempValue;
    });
};

const validatorsMap = {
  [VALIDATION_TYPES.PLANET_TEMP]: hasPlanetWithMinTemp
};

const getValidatorExecutor = validator => system =>
  validatorsMap[validator.type](validator.value, system);

export const isGoalFulfilled = (goal, currentSystem) => {
  return !goal.validators.find(validator => {
    const validatorExec = getValidatorExecutor(validator);
    return !validatorExec(currentSystem);
  });
};
