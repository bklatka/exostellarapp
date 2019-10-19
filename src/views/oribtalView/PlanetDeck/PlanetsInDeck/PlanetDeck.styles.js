import styled, { css } from "styled-components/macro";

export const SinglePlanetWrapper = styled.li``;

export const StyledPlanetDeck = styled.ul`
  flex: 1;
  overflow: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-bottom: 0;
  transition: all 1.2s ease-out;
  &:after {
    content: "Please select your orbit";
    position: fixed;
    bottom: -40px;
    left: 0;
    width: 100%;
    height: 40px;
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
  ${({ showInfo }) =>
    showInfo &&
    css`
      ${SinglePlanetWrapper} {
        opacity: 0.6;
      }
    `}
  ${SinglePlanetWrapper} {
    width: 50%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    transition: all 1.2s ease-out;
    &:nth-child(even) {
      padding-left: 1rem;
    }
    &:nth-child(odd) {
      padding-right: 1rem;
    }
  }
`;
