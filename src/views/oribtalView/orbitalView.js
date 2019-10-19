import React from "react";
import AppLayout from "../../components/AppLayout/AppLayout";
import PlanetDeck from "./PlanetDeck/PlanetDeck";
import SystemMonitor from "./SystemMonitor/SystemMonitor";

const OrbitalView = props => {
  return (
    <AppLayout className={"orbital-view"}>
      <SystemMonitor />
      <PlanetDeck />
    </AppLayout>
  );
};

OrbitalView.propTypes = {};

export default OrbitalView;
