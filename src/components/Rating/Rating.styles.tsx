import styled from "styled-components";
import { colorMetric } from "../../utils/theme";
import { WrapperStyledProps, VariantStyledProps } from "./types";

export const Wrapper = styled.div<WrapperStyledProps>`
  display: inline-block;
  position: relative;
  &:not(:hover) label input:checked ~ span {
    color: ${(props) => colorMetric[props.color]};
  },
  ${(props) => ({
    ...(props.variant === "controlled" && {
      "&:hover label:hover input ~ span": {
        color: colorMetric[props.color],
      },
    }),
  })}
`;

export const Star = styled.label<WrapperStyledProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  &:nth-child(1) {
    z-index: 5;
  }
  &:nth-child(2) {
    z-index: 4;
  }
  &:nth-child(3) {
    z-index: 3;
  }
  &:nth-child(4) {
    z-index: 2;
  }
  &:nth-child(5) {
    z-index: 1;
    position: static;
  }
  &:last-child span {
    color: rgb(196, 196, 196);
  }
  & span {
    color: transparent;
    opacity: ${(props) => (props.variant === "disabled" ? 0.4 : 1)};
  }
  cursor: ${(props) =>
    props.variant === "controlled" ? "pointer" : "disabled"};
`;

export const Input = styled.input<VariantStyledProps>`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: ${(props) =>
    props.variant === "controlled" ? "pointer" : "disabled"};
`;
