import styled from "styled-components";
import { colorMetric } from "../../utils/theme";
import { InnerStyledProps, InputFieldStyledProps } from "./types";

export const Wrapper = styled.div<InnerStyledProps>`
  position: relative;
  flex-direction: column;
  cursor: pointer;
  span {
    top: 50%;
    position: absolute;
    transform: translateY(-50%);
  }
  display: ${(props) => (props.fullWidth ? "flex" : "inline-flex")};
`;

export const AutocompleteField = styled.input<InputFieldStyledProps>`
  outline: none;
  display: flex;
  appearance: none;
  min-height: 2.625rem;
  background-color: #fff;
  font-size: 0.875rem;
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
  border: ${(props) => ` 1px solid ${colorMetric[props.color || "secondary"]}`};
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  user-select: ${(props) => (props.readOnly ? "none" : "all")};
`;

export const HelperText = styled.div`
  font-size: 0.875rem;
  margin-top: 0.188rem;
  color: #727272;
`;

export const Suggestions = styled.nav`
  display: flex;
  width: 100%;
  max-width: 100%;
  margin-top: 0.313rem;
  left: 0;
  top: 100%;
  padding: 0;
  z-index: 100;
  min-width: 9.625rem;
  position: absolute;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 3px 7px rgb(0 0 0 / 10%);
  li {
    color: #000;
    padding: 0.625rem;
    display: block;
    text-decoration: none;
    font-size: 0.875rem;
    &:hover {
      color: rgb(34, 34, 34);
      text-decoration: none;
      background-color: rgba(34, 34, 34, 0.1);
    }
  }
`;
