import styled from "styled-components";
import { WrapperStyledProps, BackgroundStyledProps } from "./types";

export const Wrapper = styled.div<WrapperStyledProps>`
  width: auto;
  max-width: 48.75rem;
  margin: 1.875rem auto;
  padding: 1.25rem;
  position: relative;
  font-family: "SFProDisplay";
  font-size: 0.875rem;
  background-color: #fff;
  box-shadow: 0 0.188rem 0.438rem rgb(0 0 0 / 10%);
`;

export const Background = styled.div<BackgroundStyledProps>`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 400ms;
  overflow: hidden;
  z-index: 999;
  padding: 2.5rem 1.25rem 1.25rem;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};
`;
