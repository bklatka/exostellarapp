import React from "react";
import {
  StyledPlanet,
  StyledPlanetOverlayAtmosphereColor,
  StyledPlanetOverlayStarShading,
  StyledPlanetOverlayTemperatureAdjustment,
  StyledPlanetOverlayTexture,
  StyledPlanetTemp
} from "./Planet.styles";
import { useSelector } from "react-redux";
import { getCurrentSystemStar } from "../../../../store/currentSystem/currentSystem.selectors";
import {
  getPlanetTemperature,
  kelvinToCelcius
} from "../../../../utils/temperature";

const atmosphereHue = "yellow";
const temperatureIntensity = "80";
const starShading =
  "linear-gradient(34deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,1) 100%)";
const planetTexture = "transparent";
const planetType = "gas";

const VisualPlanet = ({ planet }) => {
  const star = useSelector(getCurrentSystemStar);
  const planetTemp = kelvinToCelcius(getPlanetTemperature(planet, star));
  return (
    <StyledPlanet planetType={planetType}>
      <StyledPlanetTemp>Temp: {planetTemp}°C</StyledPlanetTemp>
      <StyledPlanetOverlayAtmosphereColor atmosphereHue={atmosphereHue} />
      <StyledPlanetOverlayTemperatureAdjustment
        temperatureIntensity={temperatureIntensity}
      />
      <StyledPlanetOverlayStarShading starShading={starShading} />
      <StyledPlanetOverlayTexture planetTexture={planetTexture} />
    </StyledPlanet>
  );
};

VisualPlanet.propTypes = {};

export default VisualPlanet;
