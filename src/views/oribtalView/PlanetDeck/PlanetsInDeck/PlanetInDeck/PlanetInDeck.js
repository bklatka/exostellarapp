import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  DualInfo,
  DualInfoBlock,
  DualInfoLabel,
  StyledPlanetActions as Actions,
  StyledPlanetContent as Content,
  StyledPlanetImage,
  StyledPlanetInDeck as Wrapper,
  StyledPlanetInfo as Info,
  StyledPlanetName
} from "./PlanetInDeck.styles";
import { useDispatch } from "react-redux";
import {
  SET_MONITOR_STATE,
  SET_PLANET_IN_HAND
} from "../../../../../store/orbitalView/orbitalView.actions";
import { MONITOR_STATE } from "../../../../../store/orbitalView/orbitalView.reducer";
import { Redirect } from "react-router-dom";
import VisualPlanet from "../../../SystemMonitor/Planet/VisualPlanet";
import { BorderButton } from "../../../../../components/BorderedButton/BorderedButton";
import { ColorBtn } from "../../../../../components/ColorBtn/ColorBtn.styled";
import {UNASSIGN_PLANET_FROM_ORBIG} from "../../../../../store/currentSystem/currentSystem.actions";

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
      <StyledPlanetImage>
        <VisualPlanet planet={planet} />
      </StyledPlanetImage>

      <Content>
        <Info>
          <StyledPlanetName>{planet.name}</StyledPlanetName>
          <p>{planet.type}</p>
        </Info>

        <DualInfo>
          <DualInfoBlock>
            <DualInfoLabel>Mass</DualInfoLabel>
            <span>{planet.mass}</span>
          </DualInfoBlock>
          <DualInfoBlock>
            <DualInfoLabel>Atmosphere</DualInfoLabel>
            <span>{planet.mass}</span>
          </DualInfoBlock>
        </DualInfo>

        <Actions>
          {!editable && (
            <ColorBtn onClick={setOrbitInSelectingMode}>Send to orbit</ColorBtn>
          )}
          {editable && (
            <ColorBtn onClick={removeFromOrbit}>Remove from orbit</ColorBtn>
          )}
          <BorderButton onClick={handleEdit}>edit</BorderButton>
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
