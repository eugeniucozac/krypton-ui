import styled from "styled-components";
import { device } from "../utils/theme";
import { WrapperStyledProps, SizeMetricProps } from "./types";

const sizeMetric: SizeMetricProps = {
  0: "0%",
  1: "8.3333333333%",
  2: "16.6666666667%",
  3: "25%",
  4: "33.3333333333%",
  5: "41.6666666667%",
  6: "50%",
  7: "58.3333333333%",
  8: "66.6666666667%",
  9: "75%",
  10: "83.3333333333%",
  11: "91.6666666667%",
  12: "100%",
};

export const Wrapper = styled.div<WrapperStyledProps>`
  flex-shrink: 0;
  padding: 0 0.625rem;
  ${(props) => ({
    ...(props.xs && {
      flexBasis: props.flex ? "100%" : sizeMetric[props.xs],
      marginLeft: sizeMetric[props.offsetXs],
    }),
  })}};
  @media print, screen and ${device.mobile} {
    ${(props) => ({
      ...(props.sm && {
        flexBasis: props.flex ? "100%" : sizeMetric[props.sm],
        marginLeft: sizeMetric[props.offsetSm],
      }),
    })}
  @media print, screen and ${device.tablet} {
    ${(props) => ({
      ...(props.md && {
        flexBasis: props.flex ? "100%" : sizeMetric[props.md],
        marginLeft: sizeMetric[props.offsetMd],
      }),
    })}
  @media print, screen and ${device.desktop} {
    ${(props) => ({
      ...(props.lg && {
        flexBasis: props.flex ? "100%" : sizeMetric[props.lg],
        marginLeft: sizeMetric[props.offsetLg],
      }),
    })}
`;
