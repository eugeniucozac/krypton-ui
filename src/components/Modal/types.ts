import { ComponentPropsWithRef } from "react";
import { Color } from "../../types";

type ModalBodyType = {
  children: React.ReactNode;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

type ModalHeaderType = ModalBodyType & {
  closeButton: boolean;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  onClose?: () => void;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

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
  className?: string;
  parent?: HTMLDivElement;
};

export type BackgroundStyledProps = {
  isOpen?: boolean;
};

export type ModalBodyProps = ComponentPropsWithRef<"section"> & ModalBodyType;

export type ModalHeaderProps = ComponentPropsWithRef<"header"> &
  ModalHeaderType;

export type ModalProps = ComponentPropsWithRef<"div"> & ModalType;
