import React from "react";
import PropTypes from "prop-types";
import { StyledPlanet, StyledPlanetWrapper } from "./Planet.styles";

const Planet = ({ orbitSize }) => {
  return (
    <StyledPlanetWrapper orbitSize={orbitSize}>
      <StyledPlanet />
    </StyledPlanetWrapper>
  );
};

Planet.propTypes = {
  orbitSize: PropTypes.number.isRequired
};

export default Planet;
