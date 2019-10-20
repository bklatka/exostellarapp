import React from "react";
import Orbit from "./Orbit/Orbit";
import Planet from "./Planet/Planet";
import {
  StyledStar,
  StyledSystemMonitor,
  StyledSystemMonitorWrapper
} from "./SystemMonitor.styles";
import { useDispatch, useSelector } from "react-redux";
import { getMonitorState } from "../../../store/orbitalView/orbitalView.selectors";
import {
  getCurrentSystemOrbits,
  getSelectedPlanets
} from "../../../store/currentSystem/currentSystem.selectors";
import { TYPES_OF_VIEW } from "../../../components/AppLayout/MainHeader/GoalBtn/Modal";
import {
  OPEN_MODAL,
  SET_TYPE_OF_VIEW_MODAL
} from "../../../store/modal/modal.actions";

const SystemMonitor = () => {
  const dispatch = useDispatch();
  const orbits = useSelector(getCurrentSystemOrbits);
  const monitorState = useSelector(getMonitorState);
  const planetsOnOrbits = useSelector(getSelectedPlanets);

  const openModal = () => {
    dispatch({ type: OPEN_MODAL });
    dispatch({
      type: SET_TYPE_OF_VIEW_MODAL,
      payload: TYPES_OF_VIEW.STAR_VIEW
    });
  };

  return (
    <StyledSystemMonitorWrapper state={monitorState}>
      <StyledSystemMonitor>
        {orbits.map(orbit => (
          <Orbit orbitSize={orbit} key={orbit} />
        ))}
        {planetsOnOrbits.map(planet => (
          <Planet planet={planet} />
        ))}
      </StyledSystemMonitor>
      <StyledStar onClick={openModal} />
    </StyledSystemMonitorWrapper>
  );
};

SystemMonitor.propTypes = {};

export default SystemMonitor;
