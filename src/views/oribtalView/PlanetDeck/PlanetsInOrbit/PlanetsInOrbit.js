import React from "react";
import {
  SinglePlanetWrapper,
  StyledPlanetDeck
} from "../PlanetsInDeck/PlanetDeck.styles";
import PlanetInDeck from "../PlanetsInDeck/PlanetInDeck/PlanetInDeck";

const SELECTED_PLANETS = [
  {
    name: "Venus2",
    mass: 534,
    imgUrl: "https://en.es-static.us/upl/2019/09/Venus-dayside.png"
  },
  {
    name: "Mars2",
    mass: 3423,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1200px-OSIRIS_Mars_true_color.jpg"
  }
];

const PlanetsInOrbit = props => {
  const planets = SELECTED_PLANETS;
  return (
    <StyledPlanetDeck>
      {planets.map(planet => (
        <SinglePlanetWrapper key={planet.name}>
          <PlanetInDeck planet={planet} />
        </SinglePlanetWrapper>
      ))}
    </StyledPlanetDeck>
  );
};

PlanetsInOrbit.propTypes = {};

export default PlanetsInOrbit;
