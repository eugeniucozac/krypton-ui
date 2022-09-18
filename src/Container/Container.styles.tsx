import styled from "styled-components";
import { WrapperStyledProps, SizeMetricProps } from "./types";

const sizeMetric: SizeMetricProps = {
  sm: "960px",
  md: "1200px",
  lg: "1320px",
  fluid: "100%",
};

export const Wrapper = styled.div<WrapperStyledProps>`
  margin: 0 auto;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  width: 100%;
  max-width: ${(props) => sizeMetric[props.size]};
`;
