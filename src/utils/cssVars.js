export const getStyleVar = varName =>
  getComputedStyle(document.documentElement).getPropertyValue(`--${varName}`);

export const setStyleVar = (varName, value) =>
  document.documentElement.style.setProperty(`--${varName}`, value);
