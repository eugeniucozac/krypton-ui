import styled, { keyframes } from "styled-components";
import { colorMetric, sizeMetric } from "../../utils/theme";
import { toRem } from "../../utils/string";
import { toRGBA } from "../../utils/colors";
import { ColorStyledProps, SizeStyledProps } from "./types";

const baseSize = 2.5;

const rotate = keyframes`
  100% { 
    transform: rotate(360deg) 
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

export const Wrapper = styled.svg<SizeStyledProps>`
  z-index: 2;
  vertical-align: middle;
  animation: ${rotate} 2s linear infinite;
  width: ${(props) => toRem(sizeMetric[props.size || "md"] * baseSize)};
  height: ${(props) => toRem(sizeMetric[props.size || "md"] * baseSize)};
`;

export const Background = styled.circle<ColorStyledProps>`
  stroke: ${(props) => toRGBA(colorMetric[props.color || "success"])};
`;

export const Path = styled.circle<ColorStyledProps>`
  stroke-linecap: round;
  animation: ${dash} 1.5s ease-in-out infinite;
  stroke: ${(props) => colorMetric[props.color || "success"]};
`;
