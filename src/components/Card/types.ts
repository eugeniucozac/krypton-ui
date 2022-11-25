import { ComponentPropsWithoutRef } from "react";

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

export type CardHeaderProps = ComponentPropsWithoutRef<"div"> & CardHeaderType;

export type CardProps = ComponentPropsWithoutRef<"div"> &
  CardBaseType & { maxWidth?: string };

export type CardImageProps = ComponentPropsWithoutRef<"img"> & CardImageType;

export type CardBaseProps = ComponentPropsWithoutRef<"div"> & CardBaseType;
