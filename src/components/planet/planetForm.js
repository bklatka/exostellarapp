import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Radio, Slider } from "antd";
import nanoid from "nanoid";

import {
  CLEAR_PLANET_FORM,
  SET_PLANET_NAME,
  SET_PLANET_SIZE,
  SET_PLANET_TYPE
} from "../../store/planet/planet.actions";
import {
  calculatePlanetMassPercent,
  calculatePlanetMassValueFromPercent,
  getPlanetTypes,
  PLANETS_MASS_RANGE
} from "../../planetSettings";
import {
  ADD_PLANET_TO_SYSTEM,
  REMOVE_PLANET_FROM_SYSTEM
} from "../../store/currentSystem/currentSystem.actions";
import { Link, Redirect } from "react-router-dom";
import { isNil } from "ramda";
import { StyledForm, StyledFormGroup } from "./PlanetForm.styled";
import { ColorBtn } from "../ColorBtn/ColorBtn.styled";
import TypesCarousel from "../typesCarousel";
import { CLOSE_MODAL } from "../../store/modal/modal.actions";

const PlanetForm = ({ planet }) => {
  const [redirect, setRedirect] = useState();
  const planetTypes = getPlanetTypes();
  const planetMassRange = PLANETS_MASS_RANGE[planet.type];
  const planetMass = calculatePlanetMassValueFromPercent(
    planet.type,
    planet.sizePercent
  );

  const dispatch = useDispatch();
  const handlePlanetNameChange = event => {
    dispatch({ type: SET_PLANET_NAME, payload: event.target.value });
  };
  const handlePlanetTypeChange = e => {
    const clickedType = e.target.value;

    dispatch({ type: SET_PLANET_TYPE, payload: clickedType });
  };
  const handlePlanetMassChange = planetMass => {
    dispatch({
      type: SET_PLANET_SIZE,
      payload: calculatePlanetMassPercent(planet.type, planetMass)
    });
  };

  const addPlanetToSystem = () => {
    const id = planet.id === null ? createPlanetId() : planet.id;
    const planetMass = calculatePlanetMassValueFromPercent(
      planet.type,
      planet.sizePercent
    );
    const planetSystem = {
      ...planet,
      id,
      mass: planetMass
    };

    dispatch({ type: ADD_PLANET_TO_SYSTEM, payload: planetSystem });
    dispatch({ type: CLEAR_PLANET_FORM });
    dispatch({ type: CLOSE_MODAL });
    dispatch({ type: CLEAR_PLANET_FORM });
  };

  if (redirect) {
    return <Redirect to={redirect} push />;
  }
  const planetTypeIndex = planetTypes.findIndex(
    planetType => planetType === planet.type
  );

  const removePlanetFromSystem = () => {
    dispatch({ type: REMOVE_PLANET_FROM_SYSTEM, payload: planet.id });
    dispatch({ type: CLOSE_MODAL });
    dispatch({ type: CLEAR_PLANET_FORM });
  };

  return (
    <StyledForm>
      <StyledFormGroup>
        <p>Planet name:</p>
        <Input
          placeholder={"Planet name"}
          value={planet.name}
          onChange={handlePlanetNameChange}
        />
      </StyledFormGroup>
      <StyledFormGroup>
        <p>Type:</p>
        <Radio.Group size={"small"} onChange={handlePlanetTypeChange}>
          {planetTypes.map(type => (
            <Radio.Button value={type}>{type}</Radio.Button>
          ))}
        </Radio.Group>
      </StyledFormGroup>
      <StyledFormGroup>
        <p>Mass:</p>
        <Slider
          {...planetMassRange}
          step={0.01}
          value={planetMass}
          onChange={handlePlanetMassChange}
        />
      </StyledFormGroup>
      {!!planet.id && (
        <ColorBtn
          style={{ backgroundColor: "red" }}
          onClick={removePlanetFromSystem}
        >
          remove
        </ColorBtn>
      )}
      <StyledFormGroup>
        <Link to={"/orbit"} style={{ marginRight: "1rem" }}>
          Go back
        </Link>
        <ColorBtn type="submit" onClick={addPlanetToSystem}>
          {isNil(planet.id) ? "ADD" : "UPDATE"} PLANET
        </ColorBtn>
        {!isNil(planet.id) ? (
          <ColorBtn
            style={{ backgroundColor: "red" }}
            type="submit"
            onClick={removePlanetFromSystem}
          >
            DELETE PLANET
          </ColorBtn>
        ) : null}
      </StyledFormGroup>
    </StyledForm>
  );
};

const createPlanetId = () => {
  return nanoid(10);
};

export default PlanetForm;
