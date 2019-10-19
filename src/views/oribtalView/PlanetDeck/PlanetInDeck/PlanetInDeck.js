import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  StyledPlanetActions as Actions,
  StyledPlanetContent as Content,
  StyledPlanetIcon as Image,
  StyledPlanetInDeck as Wrapper,
  StyledPlanetInfo as Info
} from "./PlanetInDeck.styles";
import { useDispatch } from "react-redux";
import {
  SET_MONITOR_STATE,
  SET_PLANET_IN_HAND
} from "../../../../store/orbitalView/orbitalView.actions";
import { MONITOR_STATE } from "../../../../store/orbitalView/orbitalView.reducer";
import { Redirect } from "react-router-dom";

const PlanetInDeck = ({ planet }) => {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState();

  const handleEdit = () => {
    setRedirect(`/planer/${planet.name}`);
  };

  const setOrbitInSelectingMode = () => {
    dispatch({ type: SET_MONITOR_STATE, payload: MONITOR_STATE.ZOOMED });
    dispatch({ type: SET_PLANET_IN_HAND, payload: planet });
  };

  if (redirect) {
    return <Redirect to={redirect} push />;
  }

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
          <button onClick={handleEdit}>edit</button>
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
