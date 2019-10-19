import styled, { keyframes } from "styled-components";
import { ORBIT_MULTIPLIER, SUN_SIZE } from "../Orbit/Orbit.styles";

const rotate = keyframes`
  0% {
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
  }
  100% {
    transform: translateX(-50%) translateY(-50%) rotate(360deg);
  }
`;

export const StyledPlanetWrapper = styled.div`
  width: ${({ orbitSize }) => orbitSize * ORBIT_MULTIPLIER + SUN_SIZE}px;
  height: ${({ orbitSize }) => orbitSize * ORBIT_MULTIPLIER + SUN_SIZE}px;
  border-radius: 50%;
  z-index: ${({ orbitSize }) => 80 - orbitSize};
  position: absolute;
  top: 50%;
  left: 50%;
  transition: all 0.2s ease-out;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transform-origin: center center;
  transform: translateX(-50%) translateY(-50%) rotate(90deg);
  animation: 5s ${rotate} linear infinite;
`;

export const StyledPlanet = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: blue;
  margin-left: -5px;
  margin-top: -5px;
`;
