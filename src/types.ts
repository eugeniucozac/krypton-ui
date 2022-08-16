type RGB = `rgb(${number}, ${number}, ${number})`;

type HEX = `#{string}`;

export type ColorCodes = RGB | HEX;

export type Color =
  | "primary"
  | "default"
  | "error"
  | "warning"
  | "info"
  | "success";

export type Size = "sm" | "md" | "lg" | "xl";

export type ColorMetricProps = Record<Color, string>;

export type SizeMetricProps = Record<Size, number>;
