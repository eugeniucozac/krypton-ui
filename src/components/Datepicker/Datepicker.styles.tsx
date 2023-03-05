import styled from "styled-components";
import { colorMetric } from "../../utils/theme";
import {
  InnerStyledProps,
  InputFieldStyledProps,
  CalendarWrapperStyleProps,
  RowCellProps,
} from "./types";

export const CalendarWrapper = styled.div<CalendarWrapperStyleProps>`
  padding: 1.25rem;
  user-select: none;
  text-align: center;
  display: inline-block;
  background: #fff;
  box-shadow: 0 3px 7px rgb(0 0 0 / 10%);
  z-index: 1000;
  top: 2.7rem;
  position: ${(props) => (props.hideInput ? "static" : "absolute")};
  width: ${(props) => (props.hideInput ? "auto" : "18.25rem")};
`;

export const InputWrapper = styled.div`
  position: relative;
  & > span {
    top: 0.938rem;
    position: absolute;
    transform: translateY(-50%);
  }
`;

export const Wrapper = styled.div<InnerStyledProps>`
  position: relative;
  flex-direction: column;
  cursor: pointer;
  display: ${(props) => (props.fullWidth ? "flex" : "inline-flex")};
  ${(props) => ({
    width: "auto",
    span: {
      right: props.endIcon ? "0.938rem" : "auto",
    },
  })}}
`;

export const InputField = styled.input<InputFieldStyledProps>`
  outline: none;
  display: flex;
  appearance: none;
  min-height: 2.625rem;
  background-color: #fff;
  font-size: 0.875rem;
  line-height: 1.2;
  font-weight: 400;
  &:disabled {
    user-select: none;
    background-color: #e5e5e5;
    border-color: rgb(196, 196, 196);
  }
  color: ${(props) =>
    props.color === "secondary"
      ? "#212529"
      : colorMetric[props.color || "secondary"]};
  padding: ${(props) =>
    props.type === "color" ? "0.375rem" : "0.75rem 1.125rem"};
  border: ${(props) => ` 1px solid ${colorMetric[props.color || "secondary"]}`};
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  user-select: ${(props) => (props.readOnly ? "none" : "all")};
  ${(props) =>
    props.endIcon && {
      paddingRight: "2.625rem",
    }}
`;

export const YearMonth = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const Prev = styled.div`
  span {
    font-size: 1.5rem;
  }
`;

export const Next = styled.div`
  span {
    font-size: 1.5rem;
  }
`;

export const Header = styled.div`
  display: flex;
`;

export const Cell = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  font-size: 0.625rem;
  font-weight: 600;
  text-transform: uppercase;
  color: rgb(170, 170, 170);
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
`;

export const RowCell = styled.div<RowCellProps>`
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  text-align: center;
  border-radius: 50%;
  position: relative;
  align-items: center;
  justify-content: center;
  &:active {
    color: #fff;
    background-color: rgb(39, 174, 96);
  };
  color: ${(props) => (props.currentMonth ? "black" : "rgb(196, 196, 196)")};
  ${(props) => ({
    ...(props.selected
      ? {
          backgroundColor: "rgb(39, 174, 96)",
          color: "#fff",
        }
      : {
          "&:hover": {
            backgroundColor: "rgba(39, 174, 96, 0.3)",
          },
        }),
  })}};
`;
