import styled from "styled-components";
import { WrapperStyledProps } from "./types";

export const Wrapper = styled.img<WrapperStyledProps>`
  border-radius: ${(props) => (props.rounded ? "1rem" : 0)};
  ${(props) => ({
    ...(props.fluid && {
      width: "100%",
      maxWidth: "100%",
      height: "auto",
    }),
  })}};
`;
