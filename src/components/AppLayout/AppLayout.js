import React from "react";
import MainHeader from "./MainHeader/MainHeader";

const AppLayout = ({ children }) => {
  return (
    <div>
      <MainHeader />
      {children}
    </div>
  );
};

export default AppLayout;
