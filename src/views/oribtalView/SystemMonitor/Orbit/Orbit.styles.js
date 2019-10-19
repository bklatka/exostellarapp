import styled from "styled-components";

export const SUN_SIZE = 20;
export const ORBIT_MULTIPLIER = 5;

export const StyledOrbit = styled.div`
  width: ${({ size }) => size * ORBIT_MULTIPLIER + SUN_SIZE}px;
  height: ${({ size }) => size * ORBIT_MULTIPLIER + SUN_SIZE}px;
  border-radius: 50%;
  border: 1px solid #3f3f3f;
  z-index: ${({ size }) => 500 - size * 10};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  transition: all 0.2s ease-out;
  cursor: pointer;

  &:hover {
    border-color: red;
  }
`;
