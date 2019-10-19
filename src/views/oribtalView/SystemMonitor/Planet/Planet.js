import React from "react";
import PropTypes from "prop-types";
import {
  StyledPlanet,
  StyledPlanetWrapper,
  StyledPlanetOverlayAtmosphereColor,
  StyledPlanetOverlayTemperatureAdjustment,
  StyledPlanetOverlayStarShading,
  StyledPlanetOverlayTexture
} from "./Planet.styles";

const atmosphereHue = "yellow";
const temperatureIntensity = "80";
const starShading =
  "linear-gradient(34deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,1) 100%)";
const planetTexture = "transparent";
const planetType = "gas";

const Planet = ({ orbitSize }) => {
  return (
    <StyledPlanetWrapper orbitSize={orbitSize}>
      <StyledPlanet planetType={planetType}>
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
  orbitSize: PropTypes.number.isRequired
};

export default Planet;
