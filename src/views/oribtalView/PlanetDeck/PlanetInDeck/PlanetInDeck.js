import React from "react";
import PropTypes from "prop-types";

const PlanetInDeck = ({ planet }) => {
  return <div className="planet-in-deck">{planet.icon}</div>;
};

PlanetInDeck.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string.isRequired,
    mass: PropTypes.number.isRequired,
    icon: PropTypes.node.isRequired
  })
};

export default PlanetInDeck;
