import React, { useState } from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { RESET_STAR } from "../../store/star/star.actions";
import { RESET_PLANET } from "../../store/planet/planet.actions";
import { RESET_ORBITAL_VIEW } from "../../store/orbitalView/orbitalView.actions";
import { RESET_CURRENT_SYSTEM } from "../../store/currentSystem/currentSystem.actions";
import { RESET_CURRENT_MISSION } from "../../store/currentMission/currentMission.actions";
import { Redirect } from "react-router-dom";

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
    <div>
      <h1>Congrats!</h1>
      <Button onClick={resetProgres}>New game</Button>
    </div>
  );
};

CongratsView.propTypes = {};

export default CongratsView;
