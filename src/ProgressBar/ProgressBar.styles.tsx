import styled from "styled-components";
import { colorMetric } from "../utils/theme";
import { toPercent } from "../utils/string";
import { toRGBA } from "../utils/colors";
import { ProgressStyleProps, ColorStyledProps, ValueStyleProps } from "./types";

export const Wrapper = styled.div<ValueStyleProps>`
  font-family: "SFProDisplay";
  font-size: 0.875rem;
  font-weight: 200;
  position: relative;
  height: 0.25rem;
  ${(props) =>
    props.withValue && {
      marginRight: "2.5rem",
    }};
  background-color: ${(props) => toRGBA(colorMetric[props.color], "0.3")};
`;

export const Line = styled.div<ProgressStyleProps>`
  height: 100%;
  transition: all ease 0.2s;
  width: ${(props) => toPercent(props.value)};
  background-color: ${(props) => colorMetric[props.color]};
`;

export const Label = styled.div<ColorStyledProps>`
  top: 10%;
  right: -2.5rem;
  font-size: 0.75rem;
  line-height: 0.875rem;
  position: absolute;
  transform: translateY(-50%);
  color: ${(props) => colorMetric[props.color]};
`;
