import { ComponentPropsWithoutRef } from "react";
import { Color } from "../../types";

type ChildrenType = {
  children?: React.ReactNode;
};

type ModalBodyType = {
  children: React.ReactNode;
};

type ModalHeaderType = ModalBodyType & {
  closeButton: boolean;
  onClose?: () => void;
};

type ModalType = ChildrenType & {
  isOpen: boolean;
  onClose: () => void;
  color?: Color;
};

export type ReactPortalType = ChildrenType & {
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
