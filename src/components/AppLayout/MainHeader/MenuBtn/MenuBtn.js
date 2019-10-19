import React from "react";
import { ReactComponent as MenuIcon } from "./menu.icon.svg";
import { MenuIconWrapper } from "./MenuBtn.styled";

const MenuBtn = props => {
  return (
    <MenuIconWrapper>
      <MenuIcon />
    </MenuIconWrapper>
  );
};

MenuBtn.propTypes = {};

export default MenuBtn;
