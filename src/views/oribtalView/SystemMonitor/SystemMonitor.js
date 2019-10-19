import React from "react";
import Orbit from "./Orbit/Orbit";
import Planet from "./Planet/Planet";
import {
  StyledSystemMonitor,
  StyledSystemMonitorWrapper
} from "./SystemMonitor.styles";
import { useSelector } from "react-redux";
import { getMonitorState } from "../../../store/orbitalView/orbitalView.selectors";

const SystemMonitor = () => {
  const orbits = [4, 8, 16, 32];
  const monitorState = useSelector(getMonitorState);
  return (
    <StyledSystemMonitorWrapper state={monitorState}>
      <StyledSystemMonitor>
        {orbits.map(orbit => (
          <Orbit orbitSize={orbit} key={orbit} />
        ))}
        <Planet orbitSize={4} />
        <Planet orbitSize={16} />
      </StyledSystemMonitor>
    </StyledSystemMonitorWrapper>
  );
};

SystemMonitor.propTypes = {};

export default SystemMonitor;
