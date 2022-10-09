import styled from "styled-components";
import { sizeMetric, colorMetric } from "../utils/theme";
import { toRem } from "../utils/string";
import { WrapperStyledProps } from "./types";

export const Wrapper = styled.a<WrapperStyledProps>`
  cursor: pointer;
  font-family: "SFProDisplay";
  font-weight: 200;
  text-decoration: ${(props) =>
    props.underline === "always"
      ? "underline"
      : props.underline === "none"
      ? "none"
      : "none"};
  font-size: ${(props) => toRem(sizeMetric[props.size || "md"] * 0.875)};
  color: ${(props) => colorMetric[props.color || "primary"]};
  ${(props) => ({
    ...(props.underline === "hover" && {
      ":hover": {
        textDecoration: "underline",
      },
    }),
  })}};
`;
