import styled from "styled-components";
import { colorMetric } from "../utils/theme";
import { toRGBA } from "../utils/colors";
import { DisabledStyledProps, SwitcherStyledProps } from "./types";

export const Wrapper = styled.div<DisabledStyledProps>`
  width: 34px;
  height: 14px;
  overflow: visible;
  position: relative;
  border-radius: 30px;
  display: inline-flex;
  vertical-align: middle;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;

export const Input = styled.input`
  opacity: 0;
  z-index: 10;
  cursor: pointer;
  width: 34px;
  height: 14px;
`;

export const Switcher = styled.span<SwitcherStyledProps>`
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.2s linear;
  position: absolute;
  border-radius: 14px;
  background-color: ${(props) =>
    props.value
      ? toRGBA(colorMetric[props.color || "success"], "0.5")
      : " #ccc"};
  &:before {
    content: "";
    top: -3.25px;
    width: 20px;
    height: 20px;
    transform: unset;
    border-radius: 50%;
    position: absolute;
    transition: 0.2s linear;
    border: 0.5px solid rgba(0, 0, 0, 0.04);
    box-shadow: 0 0.1px 0.3px rgb(0 0 0 / 10%), 0 1px 2px rgb(0 0 0 / 20%);
    background-color: ${(props) =>
      props.value ? colorMetric[props.color || "success"] : "#fff"};
    ${(props) => ({
      ...(props.value
        ? {
            right: "-2px",
          }
        : {
            left: "-2px",
          }),
    })}
  }
`;
