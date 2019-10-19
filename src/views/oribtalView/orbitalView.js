import React from "react";
import AppLayout from "../../components/AppLayout/AppLayout";
import SystemMonitor from "./SystemMonitor/SystemMonitor";
import PlanetDeck from "./PlanetDeck/PlanetDeck";

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
