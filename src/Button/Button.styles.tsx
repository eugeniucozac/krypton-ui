import styled from "styled-components";
import { colorMetric, sizeMetric } from "../utils/theme";
import { toRem } from "../utils/string";
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
  width: ${(props) => (props.width === "full" ? "100%" : "auto")};
  padding: ${(props) =>
    `${toRem(sizeMetric[props.size] * 0.625)} ${toRem(
      sizeMetric[props.size] * 1.25
    )}`};
  border-radius: ${(props) => (props.variant === "square" ? "0" : "3.125rem")};
  background: ${(props) =>
    props.model === "text"
      ? "transparent"
      : props.model === "outline"
      ? "rgb(255, 255, 255)"
      : colorMetric[props.color]};
  color: ${(props) =>
    props.model === "outline" || props.model === "text"
      ? colorMetric[props.color]
      : "rgb(255, 255, 255)"};
  border: ${(props) =>
    props.model === "text" ? "none" : `1px solid ${colorMetric[props.color]}`};
  &: hover {
    color: rgb(255, 255, 255);
    box-shadow: ${(props) =>
      props.model === "outline" && "0 3px 7px rgb(0 0 0 / 10%)"};
    background: ${(props) =>
      props.model === "outline"
        ? colorMetric[props.color]
        : `linear-gradient(
      rgba(0, 0, 0, 0.25),
      rgba(0, 0, 0, 0.25)
    ) ${colorMetric[props.color]}`};
  }
`;
