import { ComponentPropsWithRef } from "react";
import { IconName } from "../Icon/types";
import { Color } from "../../types";

type AlertType = {
  children?: React.ReactNode;
  onClose?: () => void;
  color?: Color;
  heading?: string;
  closeIcon?: IconName;
};

export type WrapperStyledProps = {
  color?: Color;
  heading?: string;
};

export type AlertProps = ComponentPropsWithRef<"div"> & AlertType;
