import styled from "styled-components";
import { IndicatorStyledProps } from "./types";

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 1.25rem;
  button {
    top: 0;
    bottom: 0;
    border: 0;
    width: 7%;
    z-index: 1;
    padding: 0;
    color: #fff;
    opacity: 0.5;
    display: flex;
    cursor: pointer;
    background: 0 0;
    text-align: center;
    position: absolute;
    align-items: center;
    justify-content: center;
    transition: opacity 0.15s ease;
    :first-of-type {
      left: 0;
    }
    :last-of-type {
      right: 0;
    }
    span {
      font-size: 2.5rem;
    }
  }
`;

export const Inner = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const Item = styled.div<IndicatorStyledProps>`
  color: #fff;
  float: left;
  width: 100%;
  position: relative;
  margin-right: -100%;
  backface-visibility: hidden;
  transition-duration: 0.6s;
  transition-property: opacity;
  transform: none;
  opacity: ${(props) => (props?.active ? 1 : 0)};
  & img {
    width: 100%;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
  }
`;

export const Caption = styled.div`
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 1.875rem;
  text-align: center;
  position: absolute;
  h4 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.375rem;
  }
  p {
    margin: 0;
    font-size: 0.875rem;
    font-weight: 300;
    color: rgb(196, 196, 196);
  }
`;

export const Indicators = styled.ul`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  padding: 0;
  margin-right: 15%;
  margin-bottom: 1rem;
  margin-left: 15%;
  list-style: none;
`;

export const Indicator = styled.li<IndicatorStyledProps>`
  display: block;
  width: 1.875rem;
  height: 0.188rem;
  margin-right: 0.188rem;
  margin-left: 0.188rem;
  background-color: #fff;
  cursor: pointer;
  transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);
  opacity: ${(props) => (props?.active ? 1 : 0.5)};
  &:hover {
    opacity: 1;
  }
`;
