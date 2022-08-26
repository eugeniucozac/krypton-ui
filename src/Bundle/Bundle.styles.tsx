import styled from "styled-components";
import { sizeMetric, colorMetric } from "../utils/theme";
import { toRem } from "../utils/string";
import { WrapperStyledProps, ColorStyledProps } from "./types";

export const Wrapper = styled.div<WrapperStyledProps>`
  cursor: pointer;
  padding: ${(props) =>
    ` 0.45rem ${toRem(sizeMetric[props.size])} 0.6rem ${toRem(
      sizeMetric[props.size]
    )}`};
  align-items: center;
  display: inline-flex;
  transition: ease 0.3s;
  background: ${(props) => colorMetric[props.color]};
  ${(props) =>
    props.disabled && {
      pointerEvents: "none",
      opacity: "0.4",
    }}
  border-radius: ${(props) =>
    props.variant === "square" ? " 0.375rem" : "3.125rem"};
  height: ${(props) => toRem(sizeMetric[props.size])};
`;

export const Title = styled.span<ColorStyledProps>`
  font-family: "SFProDisplay";
  font-size: 0.875rem;
  font-weight: 200;
  user-select: none;
  color: ${(props) => (props.color === "default" ? "black" : "white")};
`;
