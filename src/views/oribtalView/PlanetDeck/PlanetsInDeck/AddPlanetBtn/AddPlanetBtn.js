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

  return (
    <StyledAddBtn onClick={redirectToNewPlanetPage}>
      <span>+</span>
      <span>Create new planet</span>
    </StyledAddBtn>
  );
};

export default AddPlanetBtn;
