import styled from "styled-components";
import { PlacementStyledProps } from "./types";

export const Wrapper = styled.div`
  position: relative;
  &:hover {
    [role="tooltip"] {
      opacity: 1;
    }
  }
`;

export const Title = styled.div`
  font-family: "SFProDisplay";
  font-size: 0.875rem;
  font-weight: 200;
  opacity: 0;
  position: absolute;
  z-index: 100;
  padding: 0.625rem;
  transform: translateX(-50%);
  transition: opacity linear 0.2s;
  min-width: 3.125rem;
`;

export const Inner = styled.div<PlacementStyledProps>`
  color: #fff;
  background-color: rgb(34, 34, 34);
  position: relative;
  text-align: center;
  white-space: nowrap;
  padding: 0.375rem 0.625rem;
  border-radius: 3px;
  box-shadow: 0 1px 5px rgb(0 0 0 / 10%);
  & div {
    position: absolute;
    width: 0;
    height: 0;
    ${(props) =>
      props.placement === "right" && {
        left: "-0.5rem",
        top: "0.5rem",
        borderTop: "0.5rem solid transparent",
        borderBottom: "0.5rem solid transparent",
        borderRight: "0.5rem solid rgb(34, 34, 34)",
      }}
    ${(props) =>
      props.placement === "bottom" && {
        top: "-0.5rem",
        borderLeft: "0.5rem solid transparent",
        borderBottom: "0.5rem solid rgb(34, 34, 34)",
        borderRight: "0.5rem solid transparent",
      }}
      ${(props) =>
      props.placement === "top" && {
        bottom: "-0.5rem",
        borderLeft: "0.5rem solid transparent",
        borderTop: "0.5rem solid rgb(34, 34, 34)",
        borderRight: "0.5rem solid transparent",
      }}
      ${(props) =>
      props.placement === "left" && {
        right: "-0.5rem",
        top: "0.5rem",
        borderTop: "0.5rem solid transparent",
        borderBottom: "0.5rem solid transparent",
        borderLeft: "0.5rem solid rgb(34, 34, 34)",
      }}
  }
`;
