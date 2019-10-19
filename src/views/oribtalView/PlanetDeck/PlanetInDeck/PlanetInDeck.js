import React from "react";
import PropTypes from "prop-types";
import {
  StyledPlanetActions as Actions,
  StyledPlanetContent as Content,
  StyledPlanetIcon as Image,
  StyledPlanetInDeck as Wrapper,
  StyledPlanetInfo as Info
} from "./PlanetInDeck.styles";
import { useDispatch } from "react-redux";
import { SET_MONITOR_STATE } from "../../../../store/orbitalView/orbitalView.actions";
import { MONITOR_STATE } from "../../../../store/orbitalView/orbitalView.reducer";

const PlanetInDeck = ({ planet }) => {
  const dispatch = useDispatch();
  const setOrbitInSelectingMode = () => {
    dispatch({ type: SET_MONITOR_STATE, payload: MONITOR_STATE.SELECTING });
  };
  return (
    <Wrapper>
      <Image imgUrl={planet.imgUrl} />

      <Content>
        <Info>
          <p>Name: {planet.name}</p>
          <p>Mass: {planet.mass}</p>
        </Info>
        <Actions>
          <button onClick={setOrbitInSelectingMode}>Send to orbit</button>
          <button>edit</button>
        </Actions>
      </Content>
    </Wrapper>
  );
};

PlanetInDeck.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string.isRequired,
    mass: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired
  })
};

export default PlanetInDeck;
