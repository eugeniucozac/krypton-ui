import styled from "styled-components";
import { colorMetric } from "../../utils/theme";
import { RadioStyledProps } from "./types";

export const Wrapper = styled.label`
  cursor: pointer;
  position: relative;
  display: inline-flex;
  align-items: center;
`;

export const Choose = styled.span<RadioStyledProps>`
  display: flex;
  flex-shrink: 0;
  position: relative;
  border-radius: 50%;
  width: 1.3rem;
  align-items: center;
  height: 1.3rem;
  justify-content: center;
  border: ${(props) => `1px solid ${colorMetric[props.color || "primary"]}`};
  &:before {
    content: "";
    border-radius: 50%;
    transition: all ease-in-out 0.1s;
    width: 0.625rem;
    height: 0.625rem;
    background-color: ${(props) => colorMetric[props.color || "primary"]};
    opacity: ${(props) => (props.checked ? 1 : 0)};
    transform: ${(props) => (props.checked ? "scale(1)" : "scale(0)")};
  }
`;

export const Label = styled.span`
  cursor: pointer;
  user-select: none;
  margin: 0 0 0 0.313rem;
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  z-index: 10;
  cursor: pointer;
`;
