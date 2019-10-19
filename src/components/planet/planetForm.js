import React from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Input, Slider } from "antd";
import { HuePicker } from "react-color";
import nanoid from "nanoid";

import {
  ADD_PLANET_TO_SYSTEM,
  SET_PLANET_HUE_COLOR,
  SET_PLANET_NAME,
  SET_PLANET_SIZE,
  SET_PLANET_TEMPERATURE_ADJUSTMENT,
  SET_PLANET_TYPE
} from "../../store/planet/planet.actions";
import {
  calculatePlanetMassPercent,
  calculatePlanetMassValueFromPercent,
  getPlanetTypes,
  PLANETS_MASS_RANGE
} from "../../planetSettings";

const PlanetForm = ({ planet }) => {
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
  const handlePlanetTypeChange = planetTypeIndex => {
    dispatch({ type: SET_PLANET_TYPE, payload: planetTypes[planetTypeIndex] });
  };
  const handlePlanetMassChange = planetMass => {
    dispatch({
      type: SET_PLANET_SIZE,
      payload: calculatePlanetMassPercent(planet.type, planetMass)
    });
  };
  const handlePlanetTemperatureAdjustmentChange = temperature_adj => {
    dispatch({
      type: SET_PLANET_TEMPERATURE_ADJUSTMENT,
      payload: temperature_adj
    });
  };
  const handleHuePickerChange = hue => {
    dispatch({ type: SET_PLANET_HUE_COLOR, payload: hue.hex });
  };

  const addPlanetToSystem = () => {
    const id = planet.id === null ? createPlanetId() : planet.id;
    dispatch({ type: ADD_PLANET_TO_SYSTEM, payload: { ...planet, id } });
  };

  return (
    <div>
      <Input
        placeholder={"Planet name"}
        value={planet.name}
        onChange={handlePlanetNameChange}
      />
      <h3>type</h3>
      <Slider
        min={0}
        max={planetTypes.length - 1}
        step={1}
        value={planetTypes.findIndex(planetType => planetType === planet.type)}
        onChange={handlePlanetTypeChange}
      />
      <h3>wielkosc</h3>
      <Slider
        {...planetMassRange}
        step={0.01}
        value={planetMass}
        onChange={handlePlanetMassChange}
      />
      <h3>zimno-cieplo</h3>
      <Slider
        min={0}
        max={100}
        step={0.01}
        value={planet.temperatureAdjustment}
        onChange={handlePlanetTemperatureAdjustmentChange}
      />
      <h3>Hue picker</h3>
      <HuePicker color={planet.hueColor} onChange={handleHuePickerChange} />
      <Button type="submit" onClick={addPlanetToSystem}>
        Add planet
      </Button>
    </div>
  );
};

const createPlanetId = () => nanoid(10);

export default PlanetForm;