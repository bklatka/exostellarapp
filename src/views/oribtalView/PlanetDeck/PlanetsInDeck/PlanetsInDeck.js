import React from "react";
import AddPlanetBtn from "./AddPlanetBtn/AddPlanetBtn";
import PlanetInDeck from "./PlanetInDeck/PlanetInDeck";
import { SinglePlanetWrapper, StyledPlanetDeck } from "./PlanetDeck.styles";
import { useSelector } from "react-redux";
import { getMonitorState } from "../../../../store/orbitalView/orbitalView.selectors";
import { MONITOR_STATE } from "../../../../store/orbitalView/orbitalView.reducer";
import { getUnselectedPlanets } from "../../../../store/currentSystem/currentSystem.selectors";

const PlanetsInDeck = () => {
  const planets = useSelector(getUnselectedPlanets);
  const monitorState = useSelector(getMonitorState);
  return (
    <StyledPlanetDeck showInfo={monitorState === MONITOR_STATE.ZOOMED}>
      <SinglePlanetWrapper>
        <AddPlanetBtn />
      </SinglePlanetWrapper>
      {planets.map(planet => (
        <SinglePlanetWrapper key={planet.name}>
          <PlanetInDeck planet={planet} />
        </SinglePlanetWrapper>
      ))}
    </StyledPlanetDeck>
  );
};

PlanetsInDeck.propTypes = {};

export default PlanetsInDeck;
