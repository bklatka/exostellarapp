import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { StyledAddBtn } from "./AddPlanetBtn.styles";
import {
  OPEN_MODAL,
  SET_TYPE_OF_VIEW_MODAL
} from "../../../../../store/modal/modal.actions";
import { TYPES_OF_VIEW } from "../../../../../components/AppLayout/MainHeader/GoalBtn/Modal";
import { useDispatch } from "react-redux";

const AddPlanetBtn = () => {
  const dispatch = useDispatch();
  // const [redirect, setRedirect] = useState();

  const openModal = () => {
    console.log("OPEN MODAL");
    dispatch({ type: OPEN_MODAL });
    dispatch({
      type: SET_TYPE_OF_VIEW_MODAL,
      payload: TYPES_OF_VIEW.PLANET_VIEW
    });
  };

  // if (redirect) {
  //   return <Redirect to={redirect} push />;
  // }

  return (
    <StyledAddBtn onClick={openModal}>
      <span>+</span>
      <span>Create new planet</span>
    </StyledAddBtn>
  );
};

export default AddPlanetBtn;
