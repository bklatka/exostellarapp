import styled, { css } from "styled-components/macro";

export const StyledSystemMonitor = styled.section`
  height: 250px;
  transition: all 1.2s cubic-bezier(0.5, -0.28, 0.34, 1.07);
`;

export const StyledSystemMonitorWrapper = styled.section`
  width: 100%;
  height: 250px;
  position: relative;
  transition: all 1.2s cubic-bezier(0.5, -0.28, 0.34, 1.07);
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
