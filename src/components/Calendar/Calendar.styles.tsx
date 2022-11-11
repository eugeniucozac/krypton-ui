import styled from "styled-components";
import { sizeMetric, colorMetric } from "../../utils/theme";
import { toRem } from "../../utils/string";
import { WrapperStyledProps, ColorStyledProps } from "./types";

export const Wrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 8px;
  border-radius: 8px;
  width: 320px;
`;

export const YearMonth = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 42px;
  border-bottom: 1px solid #b3b3b3;
  margin-bottom: 8px;
`;

export const Prev = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
`;

export const Next = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-90deg);
`;

export const Header = styled.div`
  margin-bottom: 8px;
  display: flex;
`;

export const Cell = styled.div`
  padding: 4px;
  width: 38px;
  height: 38px;
  margin: 0 2px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
`;

export const RowCell = styled.div<any>`
  padding: 4px;
  width: 38px;
  height: 38px;
  margin: 0 2px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  &:active {
    background-color: #d1d1d1;
  }
  ${(props) => ({
    ...(props.selected
      ? {
          backgroundColor: "#0036cc",
          color: "#fff",
        }
      : {
          "&:hover": {
            backgroundColor: "#e9e9e9",
          },
        }),
  })}};
`;
