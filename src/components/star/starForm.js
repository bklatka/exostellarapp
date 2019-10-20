import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Radio, Slider } from "antd";

import {
  calculateStarMassPercent,
  calculateStarMassValueFromPercent,
  calculateStarTempPercent,
  calculateStarTempValueFromPercent,
  getStarTypes,
  STARS_MASS_RANGE,
  STARS_TEMPERATURE_RANGE
} from "../../starSettings";
import {
  SET_STAR_NAME,
  SET_STAR_SIZE,
  SET_STAR_TEMPERATURE,
  SET_STAR_TYPE
} from "../../store/star/star.actions";
import { ADD_STAR_TO_SYSTEM } from "../../store/currentSystem/currentSystem.actions";
import { Link, Redirect } from "react-router-dom";
import { StyledForm, StyledFormGroup } from "../planet/PlanetForm.styled";
import { ColorBtn } from "../ColorBtn/ColorBtn.styled";
import TypesCarousel from "../typesCarousel";
import { CLOSE_MODAL } from "../../store/modal/modal.actions";

const StarForm = ({ star, currentSystemStar }) => {
  const [redirect, setRedirect] = useState();

  const starTypes = getStarTypes();
  const starMassRange = STARS_MASS_RANGE[star.type];
  const starMass = calculateStarMassValueFromPercent(
    star.type,
    star.sizePercent
  );

  const starTempRange = STARS_TEMPERATURE_RANGE[star.type];
  const starTemp = calculateStarTempValueFromPercent(
    star.type,
    star.temperaturePercent
  );

  const dispatch = useDispatch();
  const handleStarNameChange = event => {
    dispatch({ type: SET_STAR_NAME, payload: event.target.value });
  };
  const handleStarTypeChange = e => {
    const starType = e.target.value;
    dispatch({ type: SET_STAR_TYPE, payload: starType });
  };
  const handleStarMassChange = planetMass => {
    dispatch({
      type: SET_STAR_SIZE,
      payload: calculateStarMassPercent(star.type, planetMass)
    });
  };
  const handleStarTemperatureChange = temp => {
    dispatch({
      type: SET_STAR_TEMPERATURE,
      payload: calculateStarTempPercent(star.type, temp)
    });
  };

  const addStarToSystem = () => {
    const starMass = calculateStarMassValueFromPercent(
      star.type,
      star.sizePercent
    );
    const starTemp = calculateStarTempValueFromPercent(
      star.type,
      star.temperaturePercent
    );
    const starToSystem = {
      name: star.name,
      type: star.type,
      mass: starMass,
      temperature: starTemp
    };
    dispatch({ type: ADD_STAR_TO_SYSTEM, payload: { ...starToSystem } });
    dispatch({ type: CLOSE_MODAL });
  };

  if (redirect) {
    return <Redirect to={redirect} push />;
  }

  const starTypeIndex = starTypes.findIndex(starType => starType === star.type);

  return (
    <StyledForm>
      <StyledFormGroup>
        <p>Star name:</p>
        <Input
          placeholder={"Star name"}
          value={star.name}
          onChange={handleStarNameChange}
        />
      </StyledFormGroup>
      <StyledFormGroup>
        <p>Star type:</p>
        <Radio.Group size={"small"} onChange={handleStarTypeChange}>
          {starTypes.map(type => (
            <Radio.Button value={type}>{type}</Radio.Button>
          ))}
        </Radio.Group>
      </StyledFormGroup>
      <StyledFormGroup>
        <p>Mass:</p>
        <Slider
          {...starMassRange}
          step={0.01}
          value={starMass}
          onChange={handleStarMassChange}
        />
      </StyledFormGroup>
      <StyledFormGroup>
        <p>Star temp:</p>
        <Slider
          {...starTempRange}
          step={1}
          value={starTemp}
          onChange={handleStarTemperatureChange}
        />
      </StyledFormGroup>
      <StyledFormGroup>
        <Link to={"/orbit"} style={{ marginRight: "1rem" }}>
          Go back
        </Link>
        <ColorBtn type="submit" onClick={addStarToSystem}>
          {currentSystemStar === null ? "ADD" : "UPDATE"} STAR
        </ColorBtn>
      </StyledFormGroup>
    </StyledForm>
  );
};

export default StarForm;
