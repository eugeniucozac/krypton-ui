import styled from "styled-components";
import { colorMetric } from "../utils/theme";
import { SeparatorStyledProps, LinkStyledProps } from "./types";

export const Wrapper = styled.nav`
  font-family: "SFProDisplay";
  font-size: 0.875rem;
  ol {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

export const Separator = styled.li<SeparatorStyledProps>`
  display: flex;
  user-select: none;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  color: ${(props) => colorMetric[props.color]};
`;

export const Link = styled.li<LinkStyledProps>`
  ${(props) => ({
    ...(props.disabled
      ? {
          a: {
            opacity: 0.65,
          },
        }
      : {
          "a:hover": {
            textDecoration: "none",
          },
        }),
  })}
`;
