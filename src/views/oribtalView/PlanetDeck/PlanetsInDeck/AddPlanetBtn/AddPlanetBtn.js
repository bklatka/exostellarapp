import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const AddPlanetBtn = () => {
  const [redirect, setRedirect] = useState();
  const redirectToNewPlanetPage = () => {
    setRedirect("/planet");
  };

  if (redirect) {
    return <Redirect to={redirect} push />;
  }

  return (
    <button className="add-planet-to-dock" onClick={redirectToNewPlanetPage}>
      +
    </button>
  );
};

export default AddPlanetBtn;
