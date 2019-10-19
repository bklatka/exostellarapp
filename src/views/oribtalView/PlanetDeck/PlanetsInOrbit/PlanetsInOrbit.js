import React from "react";
import {
  SinglePlanetWrapper,
  StyledPlanetDeck
} from "../PlanetsInDeck/PlanetDeck.styles";
import PlanetInDeck from "../PlanetsInDeck/PlanetInDeck/PlanetInDeck";
import { useSelector } from "react-redux";
import { getSelectedPlanets } from "../../../../store/currentSystem/currentSystem.selectors";

const PlanetsInOrbit = props => {
  const planets = useSelector(getSelectedPlanets);
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
