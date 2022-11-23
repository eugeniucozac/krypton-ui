import styled from "styled-components";
import { sizeMetric, colorMetric } from "../../utils/theme";
import { toRem } from "../../utils/string";
import { WrapperStyledProps, ColorStyledProps } from "./types";

export const Wrapper = styled.div`
  padding: 1.25rem;
  user-select: none;
  text-align: center;
  display: inline-block;
  background: #fff;
  box-shadow: 0 3px 7px rgb(0 0 0 / 10%);
`;

export const YearMonth = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const Prev = styled.div`
  width: 1.625rem;
  height: 1.625rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
`;

export const Next = styled.div`
  width: 1.625rem;
  height: 1.625rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-90deg);
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

export const RowCell = styled.div<any>`
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
