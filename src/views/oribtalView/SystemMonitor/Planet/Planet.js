import React from "react";
import PropTypes from "prop-types";
import {
  StyledPlanet,
  StyledPlanetOverlayAtmosphereColor,
  StyledPlanetOverlayStarShading,
  StyledPlanetOverlayTemperatureAdjustment,
  StyledPlanetOverlayTexture,
  StyledPlanetTemp,
  StyledPlanetWrapper
} from "./Planet.styles";
import {
  getPlanetTemperature,
  kelvinToCelcius
} from "../../../../utils/temperature";
import { useSelector } from "react-redux";
import { getCurrentSystemStar } from "../../../../store/currentSystem/currentSystem.selectors";

const atmosphereHue = "yellow";
const temperatureIntensity = "80";
const starShading =
  "linear-gradient(34deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,1) 100%)";
const planetTexture = "transparent";
const planetType = "gas";

const Planet = ({ planet }) => {
  const star = useSelector(getCurrentSystemStar);
  const planetTemp = kelvinToCelcius(getPlanetTemperature(planet, { mass: 1 }));
  return (
    <StyledPlanetWrapper orbitSize={planet.orbit}>
      <StyledPlanet planetType={planetType}>
        <StyledPlanetTemp>Temp: {planetTemp}°C</StyledPlanetTemp>
        <StyledPlanetOverlayAtmosphereColor atmosphereHue={atmosphereHue} />
        <StyledPlanetOverlayTemperatureAdjustment
          temperatureIntensity={temperatureIntensity}
        />
        <StyledPlanetOverlayStarShading starShading={starShading} />
        <StyledPlanetOverlayTexture planetTexture={planetTexture} />
      </StyledPlanet>
    </StyledPlanetWrapper>
  );
};

Planet.propTypes = {
  planet: PropTypes.shape({
    mass: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    sizePercent: PropTypes.string.isRequired
  }).isRequired
};

export default Planet;
