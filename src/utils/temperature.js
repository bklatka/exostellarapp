export const calculateTemperature = (
  starMass,
  distanceFromStar,
  bondAlbedo,
  greenHouseEffect
) => {
  const pi = Math.PI;
  const sigma = 5.6703 * Math.pow(10, -5);
  const L = 3.846 * Math.pow(10, 33) * Math.pow(starMass, 3);
  const D = distanceFromStar * 1.496 * Math.pow(10, 13);
  const A = bondAlbedo / 100;
  const T = greenHouseEffect * 0.5841;
  const X = Math.sqrt(((1 - A) * L) / (16 * pi * sigma));
  const T_eff = Math.sqrt(X) * (1 / Math.sqrt(D));
  const T_eq = Math.pow(T_eff, 4) * (1 + (3 * T) / 4);
  const T_sur = T_eq / 0.9;
  return Math.round(Math.sqrt(Math.sqrt(T_sur)));
};

export const kelvinToCelcius = kelvinTemp => kelvinTemp - 273;
export const kelvinToFarenheit = kelvinTemp =>
  Math.round((9 * (kelvinTemp - 273)) / 5 + 32);
