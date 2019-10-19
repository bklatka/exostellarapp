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
} from "../../../../../store/orbitalView/orbitalView.actions";
import { MONITOR_STATE } from "../../../../../store/orbitalView/orbitalView.reducer";
import { Redirect } from "react-router-dom";
import { UNASSIGN_PLANET_FROM_ORBIG } from "../../../../../store/currentSystem/currentSystem.actions";

const PlanetInDeck = ({ planet, editable }) => {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState();

  const handleEdit = () => {
    setRedirect(`/planet/${planet.id}`);
  };

  const setOrbitInSelectingMode = () => {
    dispatch({ type: SET_MONITOR_STATE, payload: MONITOR_STATE.ZOOMED });
    dispatch({ type: SET_PLANET_IN_HAND, payload: planet });
  };

  if (redirect) {
    return <Redirect to={redirect} push />;
  }

  const removeFromOrbit = () => {
    dispatch({ type: UNASSIGN_PLANET_FROM_ORBIG, payload: planet });
  };

  return (
    <Wrapper>
      <Image imgUrl={planet.planetThumbnailUrl} />

      <Content>
        <Info>
          <p>Name: {planet.name}</p>
          <p>Mass: {planet.mass}</p>
        </Info>
        <Actions>
          {!editable && (
            <button onClick={setOrbitInSelectingMode}>Send to orbit</button>
          )}
          {editable && (
            <button onClick={removeFromOrbit}>Remove from orbit</button>
          )}
          <button onClick={handleEdit}>edit</button>
        </Actions>
      </Content>
    </Wrapper>
  );
};

PlanetInDeck.defaultProps = {
  editable: false
};

PlanetInDeck.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string.isRequired,
    mass: PropTypes.number.isRequired,
    planetThumbnailUrl: PropTypes.string.isRequired
  }),
  editable: PropTypes.bool
};

export default PlanetInDeck;
