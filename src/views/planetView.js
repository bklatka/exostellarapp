import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import AppLayout from "../components/AppLayout/AppLayout";
import PlanetForm from "../components/planet/planetForm";
import { getPlanetFormData } from "../store/planet/planet.selectors";
import { getCurrentSystemPlanet } from "../store/currentSystem/currentSystem.selectors";
import { calculatePlanetMassPercent, getPlanetTypes } from "../planetSettings";
import { isNil } from "ramda";

const PlanetView = props => {
  const { id } = useParams();
  const planetInCurrentSystem = useSelector(getCurrentSystemPlanet(id));
  const planetFormData = useSelector(getPlanetFormData);

  return (
    <AppLayout>
      <h1>Planet form {JSON.stringify(planetFormData)}</h1>
      <PlanetForm planet={planetFormData} />}
    </AppLayout>
  );
};

PlanetView.propTypes = {};

export default PlanetView;
