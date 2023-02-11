import { ComponentProps } from "react";

type GridType = {
  children?: React.ReactNode;
  className?: string;
  container?: boolean;
  spacing?: number;
};

export type WrapperStyledProps = {
  container?: boolean;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  flex: boolean;
  offsetXs: number;
  offsetSm: number;
  offsetMd: number;
  offsetLg: number;
};

export type SizeMetricProps = Record<number, string>;

export type GridProps = ComponentProps<"div"> & GridType;
