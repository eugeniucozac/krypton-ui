import styled from "styled-components";
import { colorMetric, sizeMetric } from "../../utils/theme";
import { toRem } from "../../utils/string";
import { WrapperStyledProps } from "./types";

export const Wrapper = styled.button<WrapperStyledProps>`
  font-family: "SFProDisplay";
  font-size: 0.75rem;
  font-weight: 200;
  line-height: 1.5;
  text-align: center;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  vertical-align: middle;
  text-transform: uppercase;
  gap: ${(props) => (props.beginIcon || props.endIcon ? "0.625rem" : 0)};
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  padding: ${(props) =>
    props.variant === "icon"
      ? ".25rem"
      : `${toRem(sizeMetric[props.size || "md"] * 0.625)} ${toRem(
          sizeMetric[props.size || "md"] * 1.25
        )}`};
  border-radius: ${(props) => (props.shape === "square" ? "0" : "3.125rem")};
  background: ${(props) =>
    props.variant === "text" || props.variant === "icon"
      ? "transparent"
      : props.variant === "outline"
      ? "rgb(255, 255, 255)"
      : colorMetric[props.color || "primary"]};
  color: ${(props) =>
    props.variant === "outline" ||
    props.variant === "text" ||
    props.variant === "icon"
      ? colorMetric[props.color || "primary"]
      : "rgb(255, 255, 255)"};
  border: ${(props) =>
    props.variant === "text" || props.variant === "icon"
      ? "none"
      : `1px solid ${colorMetric[props.color || "primary"]}`};
  &:hover {
    color: ${(props) =>
      props.variant === "icon"
        ? colorMetric[props.color || "primary"]
        : "rgb(255, 255, 255)"};
    box-shadow: ${(props) =>
      props.variant === "outline" && "0 3px 7px rgb(0 0 0 / 10%)"};
    background: ${(props) =>
      props.variant === "icon"
        ? "transparent"
        : props.variant === "outline"
        ? colorMetric[props.color || "primary"]
        : `linear-gradient(
      rgba(0, 0, 0, 0.25),
      rgba(0, 0, 0, 0.25)
    ) ${colorMetric[props.color || "primary"]}`};
  }
`;
