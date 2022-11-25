import { ComponentPropsWithoutRef } from "react";
import { IconName } from "../Icon/types";
import { Color } from "../../types";

type AlertBaseType = {
  color?: Color;
  heading?: string;
};

type AlertType = AlertBaseType & {
  children?: React.ReactNode;
  onClose?: () => void;
  closeIcon?: IconName;
};

export type WrapperStyledProps = AlertBaseType;

export type AlertProps = ComponentPropsWithoutRef<"div"> & AlertType;
