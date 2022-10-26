import styled from "styled-components";
import {
  CommonStyledProps,
  StatusStyledProps,
  OrientationStyledProps,
} from "./types";

export const Wrapper = styled.div<OrientationStyledProps>`
  padding: 1.875rem 1.875rem 1.25rem;
  box-shadow: 0 3px 7px rgb(0 0 0 / 10%);
  display: ${(props) =>
    props.orientation === "horizontal" ? "flex" : "inline-flex"};
    ${(props) => ({
      ...(props.orientation === "vertical" && {
        maxWidth: "18.75rem",
        width: "100%",
        flexDirection: "column",
      }),
    })}}
`;

export const StepWrapper = styled.div<OrientationStyledProps>`
  ${(props) => ({
    ...(props.orientation === "vertical" && {
      flexDirection: "column",
    }),
  })}}
`;

export const StepLine = styled.div<CommonStyledProps>`
  flex: 1 1 auto;
  &:last-of-type {
    display: none;
  }
  background-color: ${(props) =>
    `${props.status === "Pending" ? "rgb(196,196,196)" : "rgb(39, 174, 96)"}`};
  ${(props) => ({
    ...(props.orientation === "vertical"
      ? {
          width: "3px",
          minHeight: "1.875rem",
          borderRadius: "1.875rem",
          margin: "1.25rem 0 1.25rem 0.7rem",
        }
      : {
          height: "3px",
          width: "100%",
          marginTop: "0.938rem",
        }),
  })}}
`;

export const StepItem = styled.div<OrientationStyledProps>`
  cursor: pointer;
  min-width: 6.25rem;
  ${(props) => ({
    ...(props.orientation === "vertical"
      ? {
          display: "flex",
          alignItems: "center",
        }
      : {
          "&:not(:first-of-type)": {
            marginLeft: "1.75rem",
          },
        }),
  })}}
`;

export const StepTitle = styled.div<StatusStyledProps>`
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 0.375rem;
  color: ${(props) =>
    `${props.status === "Pending" ? "rgb(196,196,196)" : "rgb(34, 34, 34)"}`};
`;

export const StepLabel = styled.div<StatusStyledProps>`
  font-size: 0.625rem;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  color: ${(props) =>
    `${
      props.status === "Pending" ? "rgb(196,196,196)" : "rgb(120, 120, 120)"
    }`};
`;

export const StepStatus = styled.div<StatusStyledProps>`
  font-size: 0.625rem;
  padding: 0.188rem 0.375rem;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  border: 1px solid transparent;
  color: ${(props) =>
    `${props.status === "Pending" ? "rgb(196,196,196)" : "rgb(39, 174, 96)"}`};
  background-color: ${(props) =>
    `${props.status === "Pending" ? "transparent" : "rgba(39, 174, 96, 0.1)"}`};
    ${(props) => ({
      ...(props.status === "Pending" && {
        borderColor: "rgb(196, 196, 196)",
      }),
    })}};
`;

export const StepIcon = styled.div<CommonStyledProps>`
  color: #fff;
  width: 1.875rem;
  height: 1.875rem;
  display: flex;
  border-radius: 50%;
  position: relative;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  background-color: rgb(39, 174, 96);
  &:before {
    content: ""
  }
  margin: ${(props) =>
    props.orientation === "horizontal" ? "0 0 1.875rem 0" : "0 10px 0 0"};
  ${(props) => ({
    ...(props.status === "Pending" && {
      backgroundColor: "transparent",
      borderColor: "rgb(196, 196, 196)",
      color: "rgb(196,196,196)",
    }),
    ...(props.status === "Progress" && {
      "&:before": {
        top: "-3px",
        left: "-3px",
        right: "-3px",
        bottom: "-3px",
        borderRadius: "50%",
        position: "absolute",
        border: "1px solid rgb(39, 174, 96)",
      },
    }),
  })}}
`;
