import { ComponentPropsWithRef } from "react";

type CardBaseType = {
  children: React.ReactNode;
};

type CardImageType = {
  imgSrc: string;
  alt?: string;
  height?: string;
};

type CardHeaderType = {
  title: string;
  subtitle: string;
  avatar: React.ReactNode;
};

export type WrapperStyledProps = {
  maxWidth?: string;
};

export type HeightStyledProps = {
  height?: string;
};

export type CardHeaderProps = ComponentPropsWithRef<"div"> & CardHeaderType;

export type CardProps = ComponentPropsWithRef<"div"> &
  CardBaseType & { maxWidth?: string };

export type CardImageProps = ComponentPropsWithRef<"img"> & CardImageType;

export type CardBaseProps = ComponentPropsWithRef<"div"> & CardBaseType;
