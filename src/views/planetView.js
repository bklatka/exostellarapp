import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import AppLayout from "../components/AppLayout/AppLayout";
import PlanetForm from "../components/planet/planetForm";
import { getPlanetFormData } from "../store/planet/planet.selectors";

const PlanetView = props => {
  const { id } = useParams();
  const planetFormData = useSelector(getPlanetFormData);
  console.log(planetFormData);
  return (
    <AppLayout>
      <h1>Planet form {JSON.stringify(planetFormData)}</h1>
      <PlanetForm planet={planetFormData} />
    </AppLayout>
  );
};

PlanetView.propTypes = {};

export default PlanetView;
