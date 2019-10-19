import styled, { css } from "styled-components/macro";

export const SinglePlanetWrapper = styled.li``;

export const StyledPlanetDeck = styled.ul`
  flex: 1;
  overflow: auto;
  padding: 0 2rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  &:after {
    content: "Please select your orbit";
    position: absolute;
    bottom: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: #3f3f3f;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 1.2s ease-out;
    z-index: 10;
    ${({ showInfo }) =>
      showInfo &&
      css`
        bottom: 0;
        opacity: 1;
      `}
  }
  ${SinglePlanetWrapper} {
    width: 50%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    &:nth-child(even) {
      padding-left: 1rem;
    }
    &:nth-child(odd) {
      padding-right: 1rem;
    }
  }
`;

export const StyledSelectingInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  opacity: 0;
`;
