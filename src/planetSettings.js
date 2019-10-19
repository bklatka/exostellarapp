export const PLANET_TYPE = {
  GAS_GIANT: "GAS_GIANT",
  ICE_GIANT: "ICE_GIANT",
  ROCKY_PLANET: "ROCKY_PLANET"
};

export const PLANETS_MASS_RANGE = {
  [PLANET_TYPE.GAS_GIANT]: { min: 0.08, max: 50 },
  [PLANET_TYPE.ICE_GIANT]: { min: 20, max: 60 },
  [PLANET_TYPE.ROCKY_PLANET]: { min: 60, max: 100 }
};

export const getPlanetTypes = () => Object.keys(PLANET_TYPE);

export const calculatePlanetMassPercent = (planetType, planetMass) => {
  const range =
    PLANETS_MASS_RANGE[planetType].max - PLANETS_MASS_RANGE[planetType].min;
  const correctedStartValue = planetMass - PLANETS_MASS_RANGE[planetType].min;
  const percentage = (correctedStartValue * 100) / range;
  return Math.round(percentage);
};

export const calculatePlanetMassValueFromPercent = (
  planetType,
  sizePercentage
) =>
  (sizePercentage *
    (PLANETS_MASS_RANGE[planetType].max - PLANETS_MASS_RANGE[planetType].min)) /
    100 +
  PLANETS_MASS_RANGE[planetType].min;
