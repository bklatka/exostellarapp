import React from "react";
import Modal from "./GoalBtn/Modal";
import MenuBtn from "./MenuBtn/MenuBtn";

const MainHeader = props => {
  return (
    <div className="main-header">
      <MenuBtn />
      <Modal />
      {/*<p className={"app-title"}>Exostellar.app</p>*/}
    </div>
  );
};

MainHeader.propTypes = {};

export default MainHeader;
