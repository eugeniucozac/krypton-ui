import styled from "styled-components";

export const Wrapper = styled.div`
  width: auto;
  max-width: 48.75rem;
  margin: 1.875rem auto;
  position: relative;
  font-family: "SFProDisplay";
  font-size: 0.875rem;
  background-color: #fff;
  box-shadow: 0 0.188rem 0.438rem rgb(0 0 0 / 10%);
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(51, 51, 51, 0.3);
  backdrop-filter: blur(1px);
  opacity: 0;
  transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 200ms;
  display: flex;
  align-items: center;
  justify-content: center;
  & .modal-content {
    transform: translateY(100px);
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
  }
  &.active {
    transition-duration: 250ms;
    transition-delay: 0ms;
    opacity: 1;
    & .modal-content {
      transform: translateY(0);
      opacity: 1;
      transition-delay: 150ms;
      transition-duration: 350ms;
    }
  }
`;

export const CloseButton = styled.button`
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
