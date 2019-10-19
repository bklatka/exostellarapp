import React from "react";
import PropTypes from "prop-types";
import { StyledOrbit } from "./Orbit.styles";

const Orbit = ({ orbitSize }) => {
  return <StyledOrbit size={orbitSize} />;
};

Orbit.propTypes = {
  orbitSize: PropTypes.number.isRequired
};

export default Orbit;
