import styled from "styled-components/macro";

export const SinglePlanetWrapper = styled.li``;

export const StyledPlanetDeck = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
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
