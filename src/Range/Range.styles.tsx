import styled from "styled-components";
import { colorMetric } from "../utils/theme";
import { ColorStyledProps } from "./types";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const Details = styled.label`
  font-size: 0.75rem;
  line-height: 0.875rem;
  color: rgb(39, 174, 96);
`;

export const Slider = styled.div`
  width: 100%;
  position: relative;
  height: 4px;
  background-color: rgba(39, 174, 96, 0.3);
  border-radius: 24px;
  margin: calc(10px) 0;
`;

export const RangeInput = styled.div`
  background-color: rgb(39, 174, 96);
  top: 0;
  left: 0;
  z-index: 1;
  height: 100%;
  position: absolute;
  border-radius: 24px;
`;

export const Handle = styled.span`
  position: absolute;
  border-radius: 50%;
  background-color: rgb(39, 174, 96);
  cursor: pointer;
  width: 20px;
  transform: translateY(-42%);
  height: 20px;
  margin-left: calc(-5px / 2);
`;
