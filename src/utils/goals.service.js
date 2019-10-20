import { getPlanetTemperature, kelvinToCelcius } from "./temperature";

export const VALIDATION_TYPES = {
  PLANET_TEMP: "atLeastOnePlanetTemp",
  PLANET_MAX_TEMP: "atLeastOnePlanetMinTemp"
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

const hasPlanetWithMaxTemp = (maxTempValue, currentSystem) => {
  const { planets, star } = currentSystem;

  return !!planets
    .filter(planet => planet.orbit)
    .find(planet => {
      const tempOnPlanet = kelvinToCelcius(getPlanetTemperature(planet, star));
      return tempOnPlanet <= maxTempValue;
    });
};

const validatorsMap = {
  [VALIDATION_TYPES.PLANET_TEMP]: hasPlanetWithMinTemp,
  [VALIDATION_TYPES.PLANET_MAX_TEMP]: hasPlanetWithMaxTemp
};

const getValidatorExecutor = validator => system =>
  validatorsMap[validator.type](validator.value, system);

export const isGoalFulfilled = (goal, currentSystem) => {
  return !goal.validation.find(validator => {
    const validatorExec = getValidatorExecutor(validator);
    return !validatorExec(currentSystem);
  });
};

export const isMissionFullfilled = (goals, currentSystem) => {
  return !goals.find(goal => !isGoalFulfilled(goal, currentSystem));
};
