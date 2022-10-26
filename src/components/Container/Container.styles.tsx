import styled from "styled-components";
import { WrapperStyledProps, BreakpointProps } from "./types";

const breakpoint: BreakpointProps = {
  sm: "960px",
  md: "1200px",
  lg: "1320px",
};

export const Wrapper = styled.div<WrapperStyledProps>`
  margin: 0 auto;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  width: 100%;
  max-width: ${(props) =>
    props.fluid ? "100%" : breakpoint[props.size || "md"]};
`;
