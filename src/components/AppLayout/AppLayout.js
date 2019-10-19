import React from "react";
import MainHeader from "./MainHeader/MainHeader";
import { StyledAppLayout } from "./AppLayout.styles";

const AppLayout = ({ children, ...restProps }) => {
  return (
    <StyledAppLayout {...restProps}>
      <MainHeader />
      {children}
    </StyledAppLayout>
  );
};

export default AppLayout;
