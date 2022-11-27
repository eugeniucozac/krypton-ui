import styled from "styled-components";
import { colorMetric } from "../../utils/theme";
import {
  InnerStyledProps,
  InputFieldStyledProps,
  InputErrorStyledProps,
} from "./types";

export const Wrapper = styled.div<InnerStyledProps>`
  position: relative;
  flex-direction: column;
  cursor: pointer;
  span {
    top: 1.35rem;
    position: absolute;
    transform: translateY(-50%);
  }
  display: ${(props) => (props.fullWidth ? "flex" : "inline-flex")};
  ${(props) => ({
    width: props.type === "color" ? "2.5rem" : "auto",
    span: {
      left: props.beginIcon ? "0.938rem" : "auto",
      right: props.endIcon ? "0.938rem" : "auto",
    },
  })}}
`;

export const InputField = styled.input<InputFieldStyledProps>`
  outline: none;
  display: flex;
  appearance: none;
  min-height: 2.625rem;
  background-color: #fff;
  font-size: 0.875rem;
  line-height: 1.2;
  font-weight: 400;
  &:disabled {
    user-select: none;
    background-color: #e5e5e5;
    border-color: rgb(196, 196, 196);
  }
  color: ${(props) =>
    props.color === "secondary"
      ? "#212529"
      : colorMetric[props.color || "secondary"]};
  padding: ${(props) =>
    props.type === "color" ? "0.375rem" : "0.75rem 1.125rem"};
  border: ${(props) =>
    `1px solid ${
      colorMetric[props.error ? "danger" : props.color || "secondary"]
    }`};
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  user-select: ${(props) => (props.readOnly ? "none" : "all")};
  ${(props) =>
    props.endIcon && {
      paddingRight: "2.625rem",
    }}
  ${(props) =>
    props.beginIcon && {
      paddingLeft: "2.625rem",
    }}
`;

export const HelperText = styled.div`
  font-size: 0.875rem;
  margin-top: 0.188rem;
  color: #727272;
`;

export const ErrorText = styled.div<InputErrorStyledProps>`
  font-size: 0.875rem;
  margin-top: 0.188rem;
  color: ${(props) => colorMetric[(props.error && "danger") || "secondary"]}; ;
`;

export const CalendarWrapper = styled.div`
  position: absolute;
  z-index: 1000;
  top: 2.625;
`;
