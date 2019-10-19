import React from "react";
import MainHeader from "./MainHeader/MainHeader";

const AppLayout = ({ children, ...restProps }) => {
  return (
    <div {...restProps}>
      <MainHeader />
      {children}
    </div>
  );
};

export default AppLayout;
