import React from "react";
import PlanetTemperature from "../components/planetTemperature/planetTemperature";
import AppLayout from "../components/AppLayout/AppLayout";

const OrbitalView = props => {
  return (
    <AppLayout>
      <PlanetTemperature />
    </AppLayout>
  );
};

OrbitalView.propTypes = {};

export default OrbitalView;
