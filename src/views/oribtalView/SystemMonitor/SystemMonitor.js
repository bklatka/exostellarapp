import React from "react";
import Orbit from "./Orbit/Orbit";

const SystemMonitor = props => {
  const orbits = [4, 8, 16, 32];
  return (
    <div className={"system-monitor"}>
      {orbits.map(orbit => (
        <Orbit orbitSize={orbit} key={orbit} />
      ))}
    </div>
  );
};

SystemMonitor.propTypes = {};

export default SystemMonitor;
