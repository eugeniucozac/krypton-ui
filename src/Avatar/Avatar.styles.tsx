import styled from "styled-components";
import { colorMetric, sizeMetric } from "../utils/theme";
import { toRem } from "../utils/string";
import { AvatarStyledProps } from "./types";

export const Wrapper = styled.div<AvatarStyledProps>`
  font-family: "SFProDisplay";
  flex-grow: 0;
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
  border-radius: 50%;
  align-items: center;
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  color: rgb(255, 255, 255);
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${(props) => toRem(sizeMetric[props.size || "md"])};
  width: ${(props) => toRem(sizeMetric[props.size || "md"] * 2.5)};
  height: ${(props) => toRem(sizeMetric[props.size || "md"] * 2.5)};
  background-color: ${(props) => colorMetric[props.color || "success"]};
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    &:after {
      content: attr(alt);
      align-items: center;
      display: inline-flex;
      justify-content: center;
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${(props) => colorMetric[props.color || "success"]};
    }
`;
