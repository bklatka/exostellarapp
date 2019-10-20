import React from "react";
import AddPlanetBtn from "./AddPlanetBtn/AddPlanetBtn";
import PlanetInDeck from "./PlanetInDeck/PlanetInDeck";
import { SinglePlanetWrapper, StyledPlanetDeck } from "./PlanetDeck.styles";
import { useDispatch, useSelector } from "react-redux";
import { getMonitorState } from "../../../../store/orbitalView/orbitalView.selectors";
import { MONITOR_STATE } from "../../../../store/orbitalView/orbitalView.reducer";
import { getUnselectedPlanets } from "../../../../store/currentSystem/currentSystem.selectors";
import {
  OPEN_MODAL,
  SET_TYPE_OF_VIEW_MODAL
} from "../../../../store/modal/modal.actions";
import { TYPES_OF_VIEW } from "../../../../components/AppLayout/MainHeader/GoalBtn/Modal";

const PlanetsInDeck = () => {
  const dispatch = useDispatch();
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
