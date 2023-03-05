import styled from "styled-components";
import { colorMetric } from "../../utils/theme";
import { SelectStyledProps } from "./types";

export const Inner = styled.div<SelectStyledProps>`
  position: relative;
  flex-direction: column;
  cursor: pointer;
  span {
    top: 50%;
    position: absolute;
    transform: translateY(-50%);
  }
  display: ${(props) => (props.fullWidth ? "flex" : "inline-flex")};
  &:after {
    font-family: "ko-iconfont";
    content: "\\e902";
    position: absolute;
    font-size: 0.75rem;
    top: 0.25rem;
    right: 0;
    padding: 0.75rem;
    cursor: pointer;
    pointer-events: none;
    color: ${(props) =>
      props.color === "secondary"
        ? "#212529"
        : colorMetric[props.color || "secondary"]};
  }
`;

export const SelectField = styled.select<SelectStyledProps>`
  display: flex;
  outline: none;
  min-height: 2.625rem;
  font-size: 0.875rem;
  line-height: 1.2;
  font-weight: 400;
  padding: 0.625rem;
  vertical-align: middle;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  color: ${(props) =>
    props.color === "secondary"
      ? "#212529"
      : colorMetric[props.color || "secondary"]};
  border: ${(props) => ` 1px solid ${colorMetric[props.color || "secondary"]}`};
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  user-select: ${(props) => (props.readOnly ? "none" : "all")};
  &:hover {
    box-shadow: 0 3px 7px rgb(0 0 0 / 10%);
  }
  &:disabled {
    user-select: none;
    background-color: #e5e5e5;
    border-color: rgb(196, 196, 196);
  }
`;

export const HelperText = styled.div`
  font-size: 0.875rem;
  margin-top: 0.188rem;
  color: #727272;
`;
