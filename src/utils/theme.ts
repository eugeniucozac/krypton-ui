import { ColorMetricProps, SizeMetricProps } from "../types";

export const colorMetric: ColorMetricProps = {
  primary: "rgb(39, 174, 96)",
  secondary: "rgb(229, 229, 229)",
  dark: "rgb(0, 0, 0)",
  white: "rgb(255, 255, 255)",
  danger: "rgb(255, 62, 62)",
  warning: "rgb(244, 197, 83)",
  info: "rgb(3, 169, 244)",
  success: "rgb(39, 174, 96)",
};

export const sizeMetric: SizeMetricProps = {
  sm: 0.5,
  md: 1,
  lg: 1.5,
  xl: 2,
};

export const screenSize = {
  mobile: "580px",
  tablet: "768px",
  desktop: "1200px",
};

export const device = {
  mobile: `(min-width: ${screenSize.mobile})`,
  tablet: `(min-width: ${screenSize.tablet})`,
  desktop: `(min-width: ${screenSize.desktop})`,
};
