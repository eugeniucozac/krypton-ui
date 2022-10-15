import styled from "styled-components";
import { indexModal } from "../utils/theme";
import { WrapperStyledProps, BackgroundStyledProps } from "./types";

export const Wrapper = styled.div<WrapperStyledProps>`
  width: auto;
  max-width: 48.75rem;
  margin: 1.875rem auto;
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
  z-index: ${indexModal};
  padding: 2.5rem 1.25rem 1.25rem;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};
`;

export const Button = styled.button`
  color: inherit;
  cursor: pointer;
  border: none;
  transform: translateY(-50%);
  background-color: transparent;
  top: 35%;
  right: 0;
  position: absolute;
`;

export const Header = styled.header`
  display: flex;
  margin: 1.25rem 1.25rem 0 1.25rem;
  padding-bottom: 1.25rem;
  font-family: "SFProDisplay";
  font-size: 1.5rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(229, 229, 229);
  position: relative;
`;

export const Footer = styled.section`
  display: flex;
  padding: 1.25rem;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
`;

export const Body = styled.section`
  padding: 0.5rem 1.25rem;
  font-family: "SFProDisplay";
  font-size: 0.875rem;
`;
