import styled from "styled-components";
import { sizeMetric, colorMetric } from "../utils/theme";
import { toRem } from "../utils/string";
import { WrapperStyledProps } from "./types";

export const Wrapper = styled.div<WrapperStyledProps>`
  cursor: pointer;
  padding: 0 1rem;
  align-items: center;
  display: inline-flex;
  transition: ease 0.3s;
  background: ${(props) => `rgb(${colorMetric[props.color]})`};
  ${(props) =>
    props.disabled && {
      pointerEvents: "none",
      opacity: "0.4",
    }}
  border-radius: ${(props) =>
    props.variant === "square" ? " 0.375rem" : "3.125rem"};
  height: ${(props) => toRem(sizeMetric[props.size] * 2)};
`;

export const Title = styled.span`
  font-family: "SFProDisplay";
  font-size: 0.875rem;
  font-weight: 200;
  user-select: none;
  color: black;
`;
