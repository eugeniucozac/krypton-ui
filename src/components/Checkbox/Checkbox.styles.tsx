import styled from "styled-components";
import { colorMetric } from "../../utils/theme";
import { CheckBoxStyledProps } from "./types";
import "../../css/fonts.css";

export const Wrapper = styled.div`
  position: relative;
`;

export const Check = styled.span<CheckBoxStyledProps>`
  display: flex;
  flex-shrink: 0;
  position: relative;
  align-items: center;
  width: 20px;
  justify-content: center;
  height: 20px;
  transition: all ease-in-out 0.1s;
  border-radius: 5px;
  border: 1px solid transparent;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  background-color: ${(props) =>
    props.checked
      ? colorMetric[props.color || "primary"]
      : "rgb(229, 229, 229)"};
  &:before {
    color: #fff;
    margin-top: 1px;
    content: "\\e901";
    transition: all ease-in-out 0.1s;
    font-size: 10px;
    opacity: ${(props) => (props.checked ? 1 : 0)};
    transform: ${(props) => (props.checked ? "scale(1)" : "scale(0)")};
  }
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  z-index: 10;
`;
