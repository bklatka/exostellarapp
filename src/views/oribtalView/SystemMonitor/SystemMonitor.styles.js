import styled, { css } from "styled-components/macro";

export const StyledSystemMonitor = styled.section`
  height: 250px;
  transition: all 0.2s ease-out;
`;

export const StyledSystemMonitorWrapper = styled.section`
  width: 100%;
  height: 250px;
  position: relative;
  transition: all 0.2s ease-out;
  overflow: hidden;
  ${({ state }) =>
    state === "selecting" &&
    css`
      height: 350px;
      ${StyledSystemMonitor} {
        transform: scale(1.8);
        height: 350px;
      }
    `}
`;
