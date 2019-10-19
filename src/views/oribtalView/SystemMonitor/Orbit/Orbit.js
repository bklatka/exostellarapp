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

const Orbit = ({ orbitSize }) => {
  const dispatch = useDispatch();
  const monitorState = useSelector(getMonitorState);
  const planet = useSelector(getPlanetInHand);
  const resetMonitor = () => {
    if (monitorState === MONITOR_STATE.ZOOMED) {
      dispatch({ type: SET_MONITOR_STATE, payload: MONITOR_STATE.NORMAL });
      console.warn(planet);
    }
  };
  return <StyledOrbit onClick={resetMonitor} size={orbitSize} />;
};

Orbit.propTypes = {
  orbitSize: PropTypes.number.isRequired
};

export default Orbit;
