import styled from "styled-components";
import { SizeAlignStyledProps, WidthStrippedStyledProps } from "./types";

export const Wrapper = styled.table<WidthStrippedStyledProps>`
  font-family: "SFProDisplay";
  font-size: 0.875rem;
  margin-bottom: 20px;
  caption-side: bottom;
  border-collapse: collapse;
  width: ${(props) => (props?.width ? props?.width : "100%")};
  ${(props) => ({
    ...(props?.stripped && {
      "tr:nth-of-type(2n+1)": {
        backgroundColor: "rgba(0, 0, 0, 0.04)",
      },
    }),
  })}};
`;

export const Head = styled.thead`
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  tr {
    background: none !important;
  }
`;

export const Body = styled.tbody`
  border-color: inherit;
  border-style: solid;
  border-width: 0;
`;

export const Row = styled.tr`
  border-color: inherit;
  border-style: solid;
  border-width: 0;
`;

export const Col = styled.td<SizeAlignStyledProps>`
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  padding: ${(props) => (props.size === "medium" ? "13px 4px" : "4px")};
  text-align: ${(props) => props.align};
  ${(props) => ({
    ...(props?.heading
      ? {
          fontWeight: 500,
          color: "rgb(120, 120, 120)",
        }
      : {
          borderTop: "1px solid rgb(229, 229, 229)",
        }),
  })}};
`;
