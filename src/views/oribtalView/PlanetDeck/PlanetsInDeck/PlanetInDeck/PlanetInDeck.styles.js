import styled from "styled-components/macro";
import { StyledPlanet } from "../../../SystemMonitor/Planet/Planet.styles";
import { BorderButton } from "../../../../../components/BorderedButton/BorderedButton";

export const StyledPlanetIcon = styled.figure`
  width: 100%;
  height: 80px;
  margin: 0;
  background: url(${({ imgUrl }) => imgUrl}) no-repeat center;
  background-size: contain;
`;

export const StyledPlanetContent = styled.article`
  position: relative;
  overflow: hidden;
  height: 120px;
`;

export const StyledPlanetInfo = styled.div`
  padding: 0 1rem;
  text-align: center;
`;

export const StyledPlanetName = styled.p`
  margin: 0;
  font-size: 1.2rem;
  text-align: center;
  width: 100%;
`;

export const StyledPlanetActions = styled.div`
  position: absolute;
  top: 108%;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #484848;
  color: #fff;
  transition: all 0.2s ease-out;
  z-index: 5;
  padding: 0.5rem 1rem;
  > * {
    margin-bottom: 0.5rem;
    width: 100%;
  }
  ${BorderButton} {
    padding: 0.5rem 1rem;
  }
`;

export const StyledPlanetImage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
`;

export const StyledPlanetInDeck = styled.article`
  border-radius: 3px;
  height: 200px;
  position: relative;
  color: #fff;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      34deg,
      rgba(255, 255, 255, 0) 21%,
      rgba(255, 255, 255, 1) 100%
    );
    opacity: 0.21;
    border-radius: 3px;
  }

  ${StyledPlanet} {
    width: 50px;
    height: 50px;
  }
  &:hover {
    ${StyledPlanetActions} {
      top: 0;
    }
  }
`;

export const DualInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DualInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.7rem;
  text-align: center;
`;

export const DualInfoLabel = styled.p`
  text-transform: uppercase;
  font-size: 0.5rem;
  font-weight: 700;
  margin: 0;
`;

export const DualInfoValue = styled.p``;
