import styled from "styled-components";
import { colorMetric } from "../utils/theme";
import { WrapperStyledProps } from "./types";

export const Wrapper = styled.div<WrapperStyledProps>`
  font-family: "SFProDisplay";
  font-size: 0.875rem;
  position: relative;
  border-radius: 0.313rem;
  display: flex;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  justify-content: flex-start;
  padding-right: 3rem;
  padding-left: ${(props) => (props.heading ? "2rem" : "1rem")};
  color: ${(props) => colorMetric[props.color]};
  ${(props) => ({
    boxShadow: "0 3px 7px rgb(0 0 0 / 10%)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    ...(props.heading && {
      "&:before": {
        top: "0.938rem",
        width: "0.25rem",
        left: "0.625rem",
        display: "block",
        position: "absolute",
        borderRadius: "2rem",
        height: "calc(100% - 1.875rem)",
        backgroundColor: colorMetric[props.color],
      },
    }),
  })}};
    &:before {
      content: ""
    }
`;

export const Button = styled.button`
  top: 50%;
  right: 0;
  border: 0;
  padding: 1rem;
  color: inherit;
  cursor: pointer;
  position: absolute;
  border-radius: 0.25rem;
  transform: translateY(-50%);
  background-color: transparent;
`;

export const IconWrapper = styled.span`
  margin-right: 1.6rem;
`;

export const Heading = styled.div`
  font-weight: bold;
  margin-bottom: 0.313rem;
  color: rgb(34, 34, 34);
  letter-spacing: 0.5px;
`;
