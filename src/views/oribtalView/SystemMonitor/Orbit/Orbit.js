import React from "react";
import PropTypes from "prop-types";
import { StyledOrbit } from "./Orbit.styles";
import { useDispatch } from "react-redux";
import { SET_MONITOR_STATE } from "../../../../store/orbitalView/orbitalView.actions";
import { MONITOR_STATE } from "../../../../store/orbitalView/orbitalView.reducer";

const Orbit = ({ orbitSize }) => {
  const dispatch = useDispatch();
  const resetMonitor = () => {
    dispatch({ type: SET_MONITOR_STATE, payload: MONITOR_STATE.NORMAL });
  };
  return <StyledOrbit onClick={resetMonitor} size={orbitSize} />;
};

Orbit.propTypes = {
  orbitSize: PropTypes.number.isRequired
};

export default Orbit;
