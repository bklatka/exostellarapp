import React from "react";
import AppLayout from "../../components/AppLayout/AppLayout";
import PlanetDeck from "./PlanetDeck/PlanetDeck";
import SystemMonitor from "./SystemMonitor/SystemMonitor";

const OrbitalView = props => {
  return (
    <AppLayout style={{ flex: "1", display: "flex", flexDirection: "column" }}>
      <SystemMonitor />
      <PlanetDeck />
    </AppLayout>
  );
};

OrbitalView.propTypes = {};

export default OrbitalView;
