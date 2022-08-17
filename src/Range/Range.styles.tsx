import styled from "styled-components";
import { colorMetric } from "../utils/theme";
import { ColorStyledProps } from "./types";

export const Label = styled.label``;

export const Input = styled.input<ColorStyledProps>`
  font-family: "SFProDisplay";
  font-size: 0.875rem;
  font-weight: 200;
  appearance: none;
  width: 100%;
  height: 4px;
  margin: 0 0 15px;
  border-radius: 24px;
  transition: all 0.2s;
  background-color: ${(props) => colorMetric[props.color]};
`;
