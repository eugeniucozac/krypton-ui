import styled from "styled-components";
import { colorMetric } from "../../utils/theme";
import { toRGBA } from "../../utils/colors";
import { AlignMetricProps, NavStyledProps, ItemStyledProps } from "./types";

const alignMetric: AlignMetricProps = {
  left: "start",
  right: "end",
  center: "center",
};

export const Wrapper = styled.nav`
  display: flex;
  padding: 0 1.563rem;
  min-height: 5rem;
  align-items: center;
  margin-bottom: 1.875rem;
  background-color: #fff;
  box-shadow: 0 3px 7px rgb(0 0 0 / 10%);
`;

export const Nav = styled.ul<NavStyledProps>`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  width: 100%;
  justify-content: ${(props) => alignMetric[props.align || "left"]};
`;

export const Item = styled.li<ItemStyledProps>`
  display: flex;
  a {
    font-family: "SFProDisplay";
    border: none;
    cursor: pointer;
    padding: 1.875rem 0.625rem;
    text-decoration: none;
    font-size: 0.95rem;
    color: rgb(34, 34, 34);
    background-color: ${(props) =>
      props.active
        ? toRGBA(colorMetric[props.color || "success"], "0.3")
        : "transparent"};
    &:hover {
      text-decoration: none;
      color: ${(props) =>
        props.active
          ? colorMetric[props.color || "primary"]
          : "rgb(196, 196, 196)"};
    }
    ${(props) => ({
      ...(props.disabled && {
        userSelect: "none",
        pointerEvents: "none",
        color: "rgb(229, 229, 229)",
      }),
      ...(props.active && {
        color: colorMetric[props.color || "primary"],
      }),
    })}
  }
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: 1.875rem 0.625rem;
  color: rgb(34, 34, 34);
  background-color: transparent;
  span {
    font-size: 0.625rem;
    margin-left: 5px;
  }
`;

export const DropDown = styled.nav`
  right: auto;
  top: 100%;
  left: 50%;
  bottom: auto;
  transform: translateX(-50%);
  box-shadow: -3px -2px 7px 0 rgb(0 0 0 / 10%);
  padding: 0;
  z-index: 100;
  min-width: 9.625rem;
  max-width: 15.625rem;
  margin-top: 0.813rem;
  position: absolute;
  flex-direction: column;
  background-color: #fff;
  li {
    a {
      padding: 10px;
    }
  }
  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: -5px;
    left: 50%;
    box-sizing: border-box;
    border: 5px solid black;
    border-color: transparent transparent #fff #fff;
    transform: translateX(-50%) rotate(135deg);
    box-shadow: -3px 3px 7px 0 rgb(0 0 0 / 10%);
  }
`;

export const SubItem = styled.li`
  vertical-align: middle;
  position: relative;
  display: flex;
  margin-bottom: 0 !important;
  padding: 0.25rem 0;
`;
