import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { StyledAddBtn } from "./AddPlanetBtn.styles";

const AddPlanetBtn = () => {
  const [redirect, setRedirect] = useState();
  const redirectToNewPlanetPage = () => {
    setRedirect("/planet");
  };

  if (redirect) {
    return <Redirect to={redirect} push />;
  }

  return <StyledAddBtn onClick={redirectToNewPlanetPage}>+</StyledAddBtn>;
};

export default AddPlanetBtn;
