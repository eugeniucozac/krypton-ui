import styled from "styled-components";
import { colorMetric } from "../../utils/theme";
import { toRGBA } from "../../utils/colors";
import { DisabledStyledProps, SwitcherStyledProps } from "./types";

export const Inner = styled.div<any>`
  position: relative;
`;

export const Input = styled.input<any>`
  width: 100%;
  outline: none;
  color: #212529;
  display: block;
  appearance: none;
  min-height: 42px;
  background-color: #fff;
  padding: 12px 25px;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 400;
  border: 1px solid rgb(229, 229, 229);
  ${(props) =>
    props.endIcon && {
      paddingRight: "45px",
    }}
  ${(props) =>
    props.beginIcon && {
      paddingLeft: "45px",
    }}
`;
