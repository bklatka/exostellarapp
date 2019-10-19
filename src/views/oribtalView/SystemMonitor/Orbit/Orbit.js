import React from "react";
import PropTypes from "prop-types";
import { StyledOrbit } from "./Orbit.styles";
import { useDispatch, useSelector } from "react-redux";
import { SET_MONITOR_STATE } from "../../../../store/orbitalView/orbitalView.actions";
import { MONITOR_STATE } from "../../../../store/orbitalView/orbitalView.reducer";
import {
  getMonitorState,
  getPlanetInHand
} from "../../../../store/orbitalView/orbitalView.selectors";
import { ASSIGN_PLANET_TO_ORBIT } from "../../../../store/currentSystem/currentSystem.actions";

const Orbit = ({ orbitSize }) => {
  const dispatch = useDispatch();
  const monitorState = useSelector(getMonitorState);
  const planet = useSelector(getPlanetInHand);
  const resetMonitor = () => {
    if (monitorState === MONITOR_STATE.ZOOMED) {
      dispatch({ type: SET_MONITOR_STATE, payload: MONITOR_STATE.NORMAL });
      dispatch({
        type: ASSIGN_PLANET_TO_ORBIT,
        payload: { planet, orbitSize }
      });
    }
  };
  return <StyledOrbit onClick={resetMonitor} size={orbitSize} />;
};

Orbit.propTypes = {
  orbitSize: PropTypes.number.isRequired
};

export default Orbit;
