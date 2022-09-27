import { ComponentProps } from "react";
import { Color } from "../types";

type ModalType = {
  isOpen: boolean;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  onClose: () => void;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  children?: React.ReactNode;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  className?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  color?: Color;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default default
   */
};

export type ReactPortalType = {
  children?: React.ReactNode;
  backdropClassName?: string;
  wrapperId?: string;
};

export type WrapperStyledProps = {};

export type BackgroundStyledProps = {
  isOpen: boolean;
};

export type ModalProps = ComponentProps<"div"> & ModalType;
