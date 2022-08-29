import styled from "styled-components";
import { WrapperStyledProps } from "./types";

export const Wrapper = styled.div<WrapperStyledProps>`
  font-family: "SFProDisplay";
  display: flex;
  width: ${(props) => props.maxWidth};
  max-width: ${(props) => props.maxWidth};
  margin: 0 0 1.25rem;
  transition: ease 0.2s;
  flex-direction: column;
  box-shadow: 0 3px 7px rgb(0 0 0 / 10%);
`;

export const Title = styled.h4`
  font-size: 1rem;
  margin: 0 0 0.5rem 0;
`;

export const Body = styled.div`
  padding: 1rem;
`;

export const Content = styled.div`
  font-size: 0.875rem;
`;

export const Actions = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  div:first-of-type {
    margin-right: 1rem;
  }
  h3 {
    font-weight: 400;
    margin: 0;
    font-size: 0.875rem;
  }
  h6 {
    color: rgb(128, 128, 128);
    font-weight: lighter;
    margin: 0;
  }
  button {
    margin-left: auto;
  }
`;

export const Image = styled.img<any>`
  width: 100%;
  max-width: 100%;
  height: ${(props) => props.height};
`;
