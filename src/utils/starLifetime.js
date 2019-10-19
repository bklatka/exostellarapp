export const calculateStarLifetime = starMass => {
  let years = Math.round(Math.pow(10, 10) * (1 / Math.pow(starMass, 2)));
  return sigFigs(years, 2);
};

const sigFigs = (n, sig) => {
  const mult = Math.pow(10, sig - Math.floor(Math.log(n) / Math.LN10) - 1);
  return Math.round(n * mult) / mult;
};

export const formatYears = year => {
  let yearStr = year + "";
  const x = yearStr.split(".");
  let x1 = x[0];
  const x2 = x.length > 1 ? "." + x[1] : "";
  const rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + "," + "$2");
  }
  return x1 + x2;
};
