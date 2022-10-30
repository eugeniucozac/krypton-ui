import styled from "styled-components";
import { colorMetric } from "../../utils/theme";
import { InnerStyledProps, InputFieldStyledProps } from "./types";

export const Inner = styled.div<InnerStyledProps>`
  position: relative;
  flex-direction: column;
  cursor: pointer;
  span {
    top: 50%;
    position: absolute;
    transform: translateY(-50%);
  }
  display: ${(props) => (props.fullWidth ? "flex" : "inline-flex")};
  ${(props) => ({
    width: props.type === "color" ? "40px" : "auto",
    span: {
      left: props.beginIcon ? "15px" : "auto",
      right: props.endIcon ? "15px" : "auto",
    },
  })}}
`;

export const InputField = styled.input<InputFieldStyledProps>`
  outline: none;
  display: flex;
  appearance: none;
  min-height: 42px;
  background-color: #fff;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 400;
  &:disabled {
    user-select: none;
    background-color: #e5e5e5;
    border-color: rgb(196, 196, 196);
  }
  color: ${(props) =>
    props.color === "secondary" ? "#212529" : colorMetric[props.color]};
  padding: ${(props) => (props.type === "color" ? "6px" : "12px 18px")};
  border: ${(props) => ` 1px solid ${colorMetric[props.color || "secondary"]}`};
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  user-select: ${(props) => (props.readOnly ? "none" : "all")};
  ${(props) =>
    props.endIcon && {
      paddingRight: "42px",
    }}
  ${(props) =>
    props.beginIcon && {
      paddingLeft: "42px",
    }}
`;

export const HelperText = styled.div`
  font-size: 14px;
  margin-top: 3px;
  color: #727272;
`;
