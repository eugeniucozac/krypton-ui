import styled from "styled-components";
import { toPx } from "../utils/string";
import { MaxHeightStyledProps } from "./types";

export const Wrapper = styled.div`
  font-family: "SFProDisplay";
  font-size: 0.875rem;
`;

export const Item = styled.div`
  border-bottom: 1px solid rgb(229, 229, 229);
`;

export const Title = styled.button`
  width: 100%;
  border: none;
  display: flex;
  font-family: "SFProDisplay";
  font-size: 0.875rem;
  font-weight: bold;
  padding: 1rem 0;
  cursor: pointer;
  transition: 0.4s;
  text-align: left;
  align-items: center;
  background-color: transparent;
`;

export const Header = styled.div`
  cursor: pointer;
  text-align: left;
  flex: 1 1 auto;
`;

export const Description = styled.div<MaxHeightStyledProps>`
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  max-height: ${(props) => `${toPx(props.maxHeight || 0)}`};
`;

export const Body = styled.div`
  margin-top: -0.75rem;
  padding: 0.625rem 0 1.25rem;
`;
