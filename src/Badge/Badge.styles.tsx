import styled from "styled-components";
import { colorMetric } from "../utils/theme";
import { ValueStyledProps, DotStyledProps } from "./types";

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
`;

export const Value = styled.div<ValueStyledProps>`
  color: rgb(255, 255, 255);
  padding: 0 0.313rem;
  line-height: 1;
  font-size: 0.75rem;
  position: absolute;
  align-items: center;
  transition: ease 0.2s;
  display: inline-flex;
  justify-content: center;
  min-width: 0.5rem;
  border: 1px solid transparent;
  min-height: 1.125rem;
  border-radius: 1.25rem;
  background-color: ${(props) => colorMetric[props.color]};
  ${(props) => ({
    [props.alignmentX]: " -0.625rem;",
    [props.alignmentY]: " -0.625rem;",
  })}
`;

export const Dot = styled.div<DotStyledProps>`
  border-radius: 1.25rem;
  justify-content: center;
  position: absolute;
  align-items: center;
  transition: ease 0.2s;
  display: inline-flex;
  line-height: 1;
  padding: 0;
  top: -0.438rem;
  right: -0.375rem;
  font-size: 0;
  min-width: unset;
  min-height: unset;
  width: 0.5rem;
  height: 0.5rem;
  background-color: ${(props) => colorMetric[props.color]};
`;
