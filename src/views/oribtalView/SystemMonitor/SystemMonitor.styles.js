import styled, { css } from "styled-components/macro";
import { MONITOR_STATE } from "../../../store/orbitalView/orbitalView.reducer";
import { Link } from "react-router-dom";

export const StyledSystemMonitor = styled.section`
  height: 250px;
  transform: rotateX(65deg) scale(2);
  transition: all 1.2s cubic-bezier(0.5, -0.28, 0.34, 1.07);
`;

export const StyledSystemMonitorWrapper = styled.section`
  width: 100%;
  height: 250px;
  position: relative;
  transition: all 1.2s cubic-bezier(0.5, -0.28, 0.34, 1.07);
  overflow: hidden;
  perspective: 1000px;

  ${({ state }) =>
    state === MONITOR_STATE.ZOOMED &&
    css`
      height: 350px;

      ${StyledSystemMonitor} {
        transform: scale(1.8) rotateX(0deg);
        height: 350px;
      }
    `}
`;

export const StyledStar = styled(Link)`
  width: 20px;
  height: 20px;
  background: yellow;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 900;
`;
