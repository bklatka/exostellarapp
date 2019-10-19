import React from "react";
import Orbit from "./Orbit/Orbit";
import Planet from "./Planet/Planet";

const SystemMonitor = () => {
  const orbits = [4, 8, 16, 32];
  return (
    <section className={"system-monitor"}>
      <div>
        {orbits.map(orbit => (
          <Orbit orbitSize={orbit} key={orbit} />
        ))}
        <Planet orbitSize={4} />
        <Planet orbitSize={16} />
      </div>
    </section>
  );
};

SystemMonitor.propTypes = {};

export default SystemMonitor;
