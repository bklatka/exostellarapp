import React from "react";
import { useDispatch } from "react-redux";
import { Button, Input, Slider } from "antd";

import {
  calculateStarMassPercent,
  calculateStarTempPercent,
  calculateStarMassValueFromPercent,
  calculateStarTempValueFromPercent,
  getStarTypes,
  STARS_MASS_RANGE,
  STARS_TEMPERATURE_RANGE
} from "../../starSettings";
import {
  ADD_STAR_TO_SYSTEM,
  SET_STAR_NAME,
  SET_STAR_SIZE,
  SET_STAR_TEMPERATURE,
  SET_STAR_TYPE
} from "../../store/star/star.actions";

const StarForm = ({ star }) => {
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
  const handleStarTypeChange = planetTypeIndex => {
    dispatch({ type: SET_STAR_TYPE, payload: starTypes[planetTypeIndex] });
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
    dispatch({ type: ADD_STAR_TO_SYSTEM, payload: { ...star } });
  };

  return (
    <div>
      <Input
        placeholder={"Star name"}
        value={star.name}
        onChange={handleStarNameChange}
      />
      <h3>type</h3>
      <Slider
        min={0}
        max={starTypes.length - 1}
        step={1}
        value={starTypes.findIndex(starType => starType === star.type)}
        onChange={handleStarTypeChange}
      />
      <h3>wielkosc</h3>
      <Slider
        {...starMassRange}
        step={0.01}
        value={starMass}
        onChange={handleStarMassChange}
      />
      <h3>temperatura</h3>
      <Slider
        {...starTempRange}
        step={1}
        value={starTemp}
        onChange={handleStarTemperatureChange}
      />
      <Button type="submit" onClick={addStarToSystem}>
        Add star
      </Button>
    </div>
  );
};

export default StarForm;
