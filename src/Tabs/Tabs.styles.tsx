import styled from "styled-components";
import { colorMetric } from "../utils/theme";
import {
  LinkStyledProps,
  PanelStyledProps,
  VariantTabsStyledProps,
  ContentStyledProps,
} from "./types";

export const Wrapper = styled.ul<VariantTabsStyledProps>`
  font-family: "SFProDisplay";
  font-size: 0.875rem;
  margin: 1rem 0 0 0;
  padding: 0;
  display: flex;
  list-style: none;
  position: relative;
  text-align: ${(props) => props.alignment};
  ${(props) => ({
    ...(props.orientation === "vertical" && {
      minWidth: "8rem",
      width: "20%",
      flexDirection: "column",
    }),
  })}
`;

export const Link = styled.button<LinkStyledProps>`
  display: block;
  font-family: "SFProDisplay";
  font-size: 0.875rem;
  line-height: 1rem;
  padding: 0.625rem 0.75rem;
  text-transform: uppercase;
  text-decoration: none;
  background: transparent;
  border: none;
  color: ${(props) =>
    props.disabled ? "rgb(229,229,229)" : "rgb(34, 34, 34)"};
  ${(props) => ({
    ...(!props.disabled && {
      cursor: "pointer",
    }),
    ...(props.orientation === "vertical"
      ? {
          ...(props.alignment === "right"
            ? {
                textAlign: "right",
                borderLeft: "2px solid rgb(229, 229, 229)",
              }
            : {
                borderRight: "2px solid rgb(229, 229, 229)",
              }),
        }
      : {
          borderBottom: "2px solid rgb(229, 229, 229)",
        }),
    ...(props.active && {
      borderColor: colorMetric[props.color || "primary"],
    }),
  })}
`;

export const Content = styled.div<ContentStyledProps>`
  margin-bottom: 1rem;
  padding: ${(props) =>
    props.orientation === "vertical" ? "1rem 1.5rem" : "0 0.625rem"};
`;

export const Panel = styled.div<PanelStyledProps>`
  font-family: "SFProDisplay";
  font-size: 0.875rem;
  display: ${(props) => (props.activeTab === props.index ? "block" : "none")};
`;

export const Container = styled.div<VariantTabsStyledProps>`
  display: flex;
  flex-wrap: ${(props) =>
    props.orientation === "vertical" ? "nowrap" : "wrap"};
  ${(props) => ({
    ...(props.alignment === "right" && {
      flexDirection: "row-reverse",
    }),
  })}
`;
