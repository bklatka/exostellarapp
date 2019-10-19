import React from "react";
import { useSelector } from "react-redux";

import AppLayout from "../components/AppLayout/AppLayout";
import StarForm from "../components/star/starForm";
import { getStarFormData } from "../store/star/star.selectors";

const StarView = props => {
  const starData = useSelector(getStarFormData);
  return (
    <AppLayout>
      <h1>Star form {JSON.stringify(starData)}</h1>
      <StarForm star={starData} />
    </AppLayout>
  );
};

StarView.propTypes = {};

export default StarView;
