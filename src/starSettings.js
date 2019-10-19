export const STAR_TYPE = {
  YELLOW_DWARF: "YELLOW_DWARF",
  RED_GIANT: "RED_GIANT"
};

export const STARS_MASS_RANGE = {
  [STAR_TYPE.YELLOW_DWARF]: { min: 0.8, max: 1.4 },
  [STAR_TYPE.RED_GIANT]: { min: 0.08, max: 0.45 }
};

export const STARS_TEMPERATURE_RANGE = {
  [STAR_TYPE.YELLOW_DWARF]: { min: 5200, max: 6000 },
  [STAR_TYPE.RED_GIANT]: { min: 2400, max: 3700 }
};

export const getStarTypes = () => Object.keys(STAR_TYPE);

export const calculateStarMassPercent = (starType, starMass) => {
  const range = STARS_MASS_RANGE[starType].max - STARS_MASS_RANGE[starType].min;
  const correctedStartValue = starMass - STARS_MASS_RANGE[starType].min;
  const percentage = (correctedStartValue * 100) / range;
  return Math.round(percentage);
};

export const calculateStarMassValueFromPercent = (starType, sizePercentage) =>
  (sizePercentage *
    (STARS_MASS_RANGE[starType].max - STARS_MASS_RANGE[starType].min)) /
    100 +
  STARS_MASS_RANGE[starType].min;

export const calculateStarTempPercent = (starType, starMass) => {
  const range =
    STARS_TEMPERATURE_RANGE[starType].max -
    STARS_TEMPERATURE_RANGE[starType].min;
  const correctedStartValue = starMass - STARS_TEMPERATURE_RANGE[starType].min;
  const percentage = (correctedStartValue * 100) / range;
  return Math.round(percentage);
};

export const calculateStarTempValueFromPercent = (starType, sizePercentage) =>
  (sizePercentage *
    (STARS_TEMPERATURE_RANGE[starType].max -
      STARS_TEMPERATURE_RANGE[starType].min)) /
    100 +
  STARS_TEMPERATURE_RANGE[starType].min;
