import styled from "styled-components/macro";

export const BorderButton = styled.button`
  padding: 1rem 2rem;
  background: transparent;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;
  border: none;
  &:focus {
    outline: none;
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 25px;
    height: 10px;
    border-left: 2px solid #fff;
    border-top: 2px solid #fff;
  }
  &:after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 25px;
    height: 10px;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
  }
`;
