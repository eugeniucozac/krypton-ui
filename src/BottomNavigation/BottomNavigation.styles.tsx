import styled from "styled-components";
import { ItemStyledProps } from "./types";

export const Wrapper = styled.nav`
  font-family: "SFProDisplay";
  font-size: 0.875rem;
  font-weight: 200;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  margin-top: auto;
`;

export const Item = styled.a<ItemStyledProps>`
  text-decoration: none;
  display: flex;
  color: ${(props) => (props.active ? props.color : "rgb(34, 34, 34)")};
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: all linear 0.1s;
  cursor: pointer;
  span {
    color: ${(props) => (props.active ? props.color : "rgb(34, 34, 34)")};
  }
  :hover {
    color: ${(props) => props.color};
    span {
      color: ${(props) => props.color};
    }
  }
`;
