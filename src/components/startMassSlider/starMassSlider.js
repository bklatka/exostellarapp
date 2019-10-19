import React from "react";
import { Slider } from "antd";
import { useDispatch } from "react-redux";
import { SET_STAR_MASS } from "../../store/star/star.actions";

const StarMassSlider = () => {
  const dispatch = useDispatch();

  const handleStarMassChange = starMass => {
    dispatch({ type: SET_STAR_MASS, payload: starMass });
  };

  return (
    <Slider min={0.08} max={100} step={0.01} onChange={handleStarMassChange} />
  );
};

StarMassSlider.propTypes = {};

export default StarMassSlider;
