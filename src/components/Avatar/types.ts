import { ComponentPropsWithRef } from "react";
import { Color, Size } from "../../types";

type AvatarType = {
  name: string;
  color?: Color;
  imgSrc?: string;
  size?: Size;
};

export type AvatarStyledProps = {
  color?: Color;
  size?: Size;
};

export type AvatarProps = ComponentPropsWithRef<"div"> & AvatarType;
