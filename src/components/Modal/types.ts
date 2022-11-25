import { ComponentPropsWithoutRef } from "react";
import { Color } from "../../types";

type ModalBodyType = {
  children: React.ReactNode;
};

type ModalHeaderType = ModalBodyType & {
  closeButton: boolean;
  onClose?: () => void;
};

type ModalType = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  color?: Color;
};

export type ReactPortalType = {
  children?: React.ReactNode;
  className?: string;
  parent?: HTMLDivElement;
};

export type BackgroundStyledProps = {
  isOpen?: boolean;
};

export type ModalBodyProps = ComponentPropsWithoutRef<"section"> &
  ModalBodyType;

export type ModalHeaderProps = ComponentPropsWithoutRef<"header"> &
  ModalHeaderType;

export type ModalProps = ComponentPropsWithoutRef<"div"> & ModalType;
