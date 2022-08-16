import styled from "styled-components";
import { sizeMetric } from "../utils/theme";
import { IconStyledProps } from "./types";
import "./style.css";

const iconName = {
  file: "\\e928",
  upload: "\\e91b",
  heart: "\\e90d",
  home: "\\e90e",
  minus: "\\e90f",
  plus: "\\e910",
  mail: "\\e90c",
  basket: "e90b",
  starFill: "\\e90a",
  info: "\\e907",
  ok: "\\e904",
  warning: "\\e905",
  cross: "\\e906",
  close: "\\e903",
  arrowDown: "\\e902",
  tick: "\\e901",
  user: "\\e900",
  message: "\\e911",
  clear: "\\e908",
  send: "\\e912",
  formatAlignCenter: "\\e91d",
  formatAlignJustify: "\\e91e",
  formatAlignLeft: "\\e91f",
  formatAlignRight: "\\e920",
  navigateBefore: "\\e915",
  navigateNext: "\\e916",
  check: "\\e909",
  expandLess: "\\e917",
  expandMore: "\\e918",
  keyboardControl: "\\e913",
  firstPage: "\\e919",
  lastPage: "\\e91a",
  person: "\\e921",
  star: "\\e91c",
  bookmarkOutline: "\\e914",
  favorite: "\\e922",
  https: "\\e929",
  search: "\\e923",
  viewList: "\\e924",
  viewModule: "\\e925",
  viewQuilt: "\\e926",
  calendarToday: "\\e92a",
  locationPin: "\\e927",
  grey: "\\e927",
  white: "\\e927",
};

export const Wrapper = styled.span<IconStyledProps>`
  font-family: "ko-iconfont";
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${(props) => props.color};
  font-size: ${(props) => `${sizeMetric[props.size]}rem`};
  &:before {
    content: "${(props) => iconName[props.name]}";
  }
`;
