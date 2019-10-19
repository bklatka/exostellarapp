import styled from "styled-components/macro";

export const StyledAddBtn = styled.button`
  margin: 0;
  padding: 0.5rem 1rem;
  border: none;
  color: #fff;
  height: 200px;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  width: 100%;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  position: relative;
  background: transparent;

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
`;
