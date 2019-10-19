import styled, { css, keyframes } from "styled-components/macro";
import { ORBIT_MULTIPLIER, SUN_SIZE } from "../Orbit/Orbit.styles";

const overlay = css`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: inherit;
`;

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
  z-index: ${({ orbitSize }) => 500 - orbitSize * 10 + 1};
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
  position: relative;
  ${({ planetType }) => {
    if (planetType === "rock") {
      return css`
        background-color: #7b7b7b;
      `;
    } else if (planetType === "ice") {
      return css`
        background-color: #6b7db6;
      `;
    } else if (planetType === "gas") {
      return css`
        background-color: #b6a26b;
      `;
    }
  }}
`;

export const StyledPlanetOverlayAtmosphereColor = styled.div`
  ${overlay};
  mix-blend-mode: overlay;
  opacity: 0.55;
  background-color: ${({ atmosphereHue }) => atmosphereHue};
`;

export const StyledPlanetOverlayTemperatureAdjustment = styled.div`
  mix-blend-mode: soft-light;
  opacity: ${({ temperatureIntensity }) => temperatureIntensity / 100};

  ${({ temperatureIntensity }) => {
    if (temperatureIntensity < 50) {
      return css`
        background-color: #ff0000;
      `;
    } else if (temperatureIntensity === 50) {
      return css`
        background-color: transparent;
      `;
    } else if (temperatureIntensity > 50) {
      return css`
        background-color: #007eff;
      `;
    }
  }}
`;

export const StyledPlanetOverlayStarShading = styled.div`
  ${overlay};
  mix-blend-mode: overlay;
  background-image: ${({ starShading }) => starShading};
`;

export const StyledPlanetOverlayTexture = styled.div`
  ${overlay};
  mix-blend-mode: initial;
  background-color: ${({ planetTexture }) => planetTexture};
`;
