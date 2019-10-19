import React from "react";
import GoalBtn from "./GoalBtn/GoalBtn";
import MenuBtn from "./MenuBtn/MenuBtn";

const MainHeader = props => {
  return (
    <div className="main-header">
      <MenuBtn />
      <GoalBtn />
    </div>
  );
};

MainHeader.propTypes = {};

export default MainHeader;
