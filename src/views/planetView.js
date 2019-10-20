import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isNil } from "ramda";

import PlanetForm from "../components/planet/planetForm";
import { getPlanetFormData } from "../store/planet/planet.selectors";
import { getCurrentSystemPlanet } from "../store/currentSystem/currentSystem.selectors";
import { CLEAR_PLANET_FORM, EDIT_PLANET } from "../store/planet/planet.actions";

const PlanetView = props => {
  const planetFormData = useSelector(getPlanetFormData);
  return <PlanetForm planet={planetFormData} />;
};

PlanetView.propTypes = {};

export default PlanetView;

export const NewPlanetView = () => {
  console.log("NewPlanetView");
  // const dispatch = useDispatch();
  // dispatch({ type: CLEAR_PLANET_FORM });
  return <PlanetView />;
};

export const EditPlanetView = () => {
  console.log("EditPlanetView");
  // const { id } = useParams();
  const { id } = useSelector(getPlanetFormData);
  const dispatch = useDispatch();
  const planetInCurrentSystem = useSelector(getCurrentSystemPlanet(id));

  if (isNil(planetInCurrentSystem)) return <Redirect to={"/orbit"} />;
  return <PlanetView />;
};
