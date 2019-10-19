import React from "react";
import PlanetTemperature from "../components/planetTemperature/planetTemperature";
import TestComponent from "../components/testComponent/testComponent";
import AppLayout from "../components/AppLayout/AppLayout";

const OrbitalView = props => {
  return (
    <AppLayout>
      <h1>Hello</h1>
      <PlanetTemperature />
      <TestComponent />
    </AppLayout>
  );
};

OrbitalView.propTypes = {};

export default OrbitalView;
