import React from "react";
import { useSelector } from "react-redux";

import AppLayout from "../components/AppLayout/AppLayout";
import StarForm from "../components/star/starForm";
import { getStarFormData } from "../store/star/star.selectors";
import { getCurrentSystemStar } from "../store/currentSystem/currentSystem.selectors";

const StarView = props => {
  const starData = useSelector(getStarFormData);
  const currentSystemStar = useSelector(getCurrentSystemStar);
  return (
    <AppLayout>
      <StarForm star={starData} currentSystemStar={currentSystemStar} />
    </AppLayout>
  );
};

StarView.propTypes = {};

export default StarView;
