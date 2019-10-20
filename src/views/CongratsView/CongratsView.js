import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { RESET_STAR } from "../../store/star/star.actions";
import { RESET_PLANET } from "../../store/planet/planet.actions";
import { RESET_ORBITAL_VIEW } from "../../store/orbitalView/orbitalView.actions";
import { RESET_CURRENT_SYSTEM } from "../../store/currentSystem/currentSystem.actions";
import { RESET_CURRENT_MISSION } from "../../store/currentMission/currentMission.actions";
import { Redirect } from "react-router-dom";
import { CongratsWrapper } from "./CongratsView.styled";
import { ColorBtn } from "../../components/ColorBtn/ColorBtn.styled";

const CongratsView = props => {
  const [redirect, setRedirect] = useState();
  const dispatch = useDispatch();

  const resetProgres = () => {
    dispatch({ type: RESET_STAR });
    dispatch({ type: RESET_PLANET });
    dispatch({ type: RESET_ORBITAL_VIEW });
    dispatch({ type: RESET_CURRENT_SYSTEM });
    dispatch({ type: RESET_CURRENT_MISSION });
    setRedirect("/orbit");
  };
  if (redirect) {
    return <Redirect to={redirect} />;
  }
  return (
    <CongratsWrapper>
      <p>Congrats!</p>
      <ColorBtn onClick={resetProgres}>New game</ColorBtn>
    </CongratsWrapper>
  );
};

CongratsView.propTypes = {};

export default CongratsView;
