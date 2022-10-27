import { ComponentPropsWithRef } from "react";

type ListType = {
  children: React.ReactNode;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

export type ListProps = ComponentPropsWithRef<"ul"> & ListType;

export type ListItemProps = ComponentPropsWithRef<"li"> & ListType;
