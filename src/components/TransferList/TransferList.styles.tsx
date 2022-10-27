import styled from "styled-components";
import { CheckboxStyledProps } from "./types";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "SFProDisplay";
  font-size: 0.875rem;
  font-weight: 200;
`;

export const Controls = styled.div`
  width: 100%;
  display: flex;
  margin: 0 1.25rem;
  max-width: 4rem;
  flex-direction: column;
  button {
    padding: 0;
    display: flex;
    line-height: 1;
    align-items: center;
    justify-content: center;
    color: rgb(196, 196, 196);
    border: 1px solid rgb(229, 229, 229);
    span {
      font-size: 1.75rem;
    }
    ,
    &:last-of-type {
      margin-bottom: 1rem;
    }
  }
`;

export const ItemWrapper = styled.div`
  min-width: 12.5rem;
  box-shadow: 0 3px 7px rgb(0 0 0 / 10%);
  ul {
    padding: 0;
    list-style: none;
    margin: 0;
    min-height: 12rem;
    max-height: 12rem;
    overflow-y: auto;
  }
`;

export const Item = styled.label`
  cursor: pointer;
  position: relative;
  display: inline-flex;
  align-items: center;
  input {
    display: none;
    box-sizing: border-box;
    padding: 0;
  }
`;

export const Checkbox = styled.span<CheckboxStyledProps>`
  display: flex;
  flex-shrink: 0;
  position: relative;
  align-items: center;
  width: 1.25rem;
  justify-content: center;
  height: 1.25rem;
  transition: all ease-in-out 0.1s;
  border: 1px solid transparent;
  border-radius: 0.375rem;
  background-color: ${(props) =>
    props.checked ? "rgb(39, 174, 96)" : "rgb(229, 229, 229)"};
  span {
    color: #fff;
    margin-top: 1px;
    transition: all ease-in-out 0.1s;
    font-size: 0.625rem;
    transform: ${(props) => (props.checked ? "scale(1)" : "scale(0)")};
    opacity: ${(props) => (props.checked ? 1 : 0)};
  }
`;

export const Label = styled.span`
  margin-left: 1rem;
  user-select: none;
  cursor: pointer;
  position: relative;
  display: inline-flex;
  align-items: center;
`;

export const List = styled.li`
  padding: 0.75rem 1.25rem;
`;

export const Header = styled.div`
  padding: 0.75rem 1.25rem;
  border-bottom: 1px solid rgb(196, 196, 196);
`;
