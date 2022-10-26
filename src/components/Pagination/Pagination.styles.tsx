import styled from "styled-components";
import { sizeMetric, colorMetric } from "../../utils/theme";
import { toRem } from "../../utils/string";
import { toRGBA } from "../../utils/colors";
import { ItemStyledProps } from "./types";

export const Wrapper = styled.nav`
  ul {
    display: flex;
    align-items: center;
    margin-bottom: 1.25rem;
    justify-content: center;
  }
`;

export const Item = styled.li<ItemStyledProps>`
  list-style-type: none;
  a {
    font-family: "SFProDisplay";
    border-radius: 50%;
    text-decoration: none;
    display: flex;
    line-height: 1rem;
    align-items: center;
    transition: ease 0.2s;
    justify-content: center;
    width: ${(props) => toRem(sizeMetric[props.size] * 1.875)};
    height: ${(props) => toRem(sizeMetric[props.size] * 1.875)};
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};
    font-size: ${(props) => toRem(sizeMetric[props.size] * 0.875)};
    color: ${(props) =>
      props.active ? colorMetric["white"] : "rgb(34, 34, 34)"};
    ${(props) => ({
      ...(props.active && {
        backgroundColor: colorMetric[props.color],
      }),
      ...(props.disabled
        ? {
            cursor: "default",
            opacity: "0.4",
          }
        : {
            ":hover": {
              color: `${colorMetric["white"]}`,
              backgroundColor: `${colorMetric[props.color]}`,
            },
          }),
    })}
  }
  span {
    cursor: pointer;
    padding: 0.5rem;
    font-size: ${(props) => toRem(sizeMetric[props.size] * 0.875)};
    ${(props) => ({
      ...(props.disabled
        ? {
            cursor: "default",
            opacity: "0.4",
          }
        : {
            ":hover": {
              backgroundColor: `${toRGBA(colorMetric[props.color], "0.2")}`,
            },
          }),
    })}
  }
`;
