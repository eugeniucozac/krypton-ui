import styled from "styled-components";
import { device } from "../../utils/theme";
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
  ${(props) => ({
    ...(props.container && {
      margin: "0 auto",
      paddingLeft: "0.625rem",
      paddingRight: "0.625rem",
      width: "100%",
      maxWidth: "100%",
    }),
  })}};
`;
