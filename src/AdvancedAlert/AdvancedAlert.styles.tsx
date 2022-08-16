import styled from "styled-components";
import { colorMetric } from "../utils/theme";
import { AdvancedAlertStyledProps, ColorStyledProps } from "./types";

export const Wrapper = styled.div<AdvancedAlertStyledProps>`
  font-family: "SFProDisplay";
  font-size: 0.875rem;
  position: relative;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  justify-content: flex-start;
  padding-left: 1rem;
  padding-right: ${(props) => (props.onClick ? "3rem" : "1rem")};
  color: ${(props) => `rgb(${colorMetric[props.color]})`};
  background-color: ${(props) => `rgba(${colorMetric[props.color]}, 0.1)`};
`;

export const Button = styled.button<ColorStyledProps>`
  top: 50%;
  right: 0;
  border: 0;
  padding: 15px;
  color: ${(props) => `rgb(${colorMetric[props.color]})`};
  cursor: pointer;
  position: absolute;
  border-radius: 0.25rem;
  transform: translateY(-50%);
  background-color: transparent;
`;
