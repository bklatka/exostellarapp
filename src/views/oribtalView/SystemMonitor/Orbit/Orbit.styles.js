import styled from "styled-components";

const SUN_SIZE = 20;
const ORBIT_MULTIPLIER = 10;

export const StyledOrbit = styled.div`
  width: ${({ size }) => size * ORBIT_MULTIPLIER + SUN_SIZE}px;
  height: ${({ size }) => size * ORBIT_MULTIPLIER + SUN_SIZE}px;
  border-radius: 50%;
  border: 1px solid #3f3f3f;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;
