import styled from "styled-components";
import { Size } from "./types";

interface BundleStyled {}

const sizeMetric = {
  sm: 0.5,
  md: 1,
  lg: 1.5,
  xl: 2,
};

export const Bundle = styled.span<BundleStyled>`
  font-family: "SFProDisplay";
  font-size: 0.875rem;
  font-weight: 200;
  user-select: none;
`;
