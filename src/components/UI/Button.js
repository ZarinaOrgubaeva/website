import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
export const Button = styled(LinkS)`
  border-radius: 50px;
  background-color: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16x;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &.hover {
    transition: all 0.2s ease-in-out;
    background-color: #ffff;
    color: #010606;
  }
`;
