import styled from "styled-components";
import { colorMetric } from "../../utils/theme";
import { toRGBA } from "../../utils/colors";
import { ColorStyledProps } from "./types";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const Details = styled.label<ColorStyledProps>`
  font-size: 0.75rem;
  line-height: 0.875rem;
  color: ${(props) => colorMetric[props.color || "success"]};
`;

export const Slider = styled.div<ColorStyledProps>`
  width: 100%;
  position: relative;
  height: 0.25rem;
  border-radius: 1.5rem;
  margin: calc(0.625rem) 0;
  background-color: ${(props) =>
    toRGBA(colorMetric[props.color || "success"], "0.3")};
`;

export const RangeInput = styled.div<ColorStyledProps>`
  top: 0;
  left: 0;
  z-index: 1;
  height: 100%;
  position: absolute;
  border-radius: 1.5rem;
  background-color: ${(props) => colorMetric[props.color || "success"]};
`;

export const Handle = styled.span<ColorStyledProps>`
  position: absolute;
  border-radius: 50%;
  cursor: pointer;
  width: 1.25rem;
  height: 1.25rem;
  transform: translateY(-42%);
  margin-left: calc(-5px / 2);
  background-color: ${(props) => colorMetric[props.color || "success"]};
`;
