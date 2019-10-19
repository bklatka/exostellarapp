import styled from "styled-components/macro";

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
`;

export const StyledPlanetInfo = styled.div`
  padding: 1rem;
`;
export const StyledPlanetActions = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #3f3f3f;
  color: #fff;
  transition: all 0.2s ease-out;
  z-index: 5;
`;

export const StyledPlanetInDeck = styled.article`
  border-radius: 3px;
  border: 1px solid #3f3f3f;
  &:hover {
    ${StyledPlanetActions} {
      top: 0;
    }
  }
`;
