import { ComponentPropsWithRef } from "react";

type FormLabelType = {
  children: React.ReactNode;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  text: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

export type FormLabelProps = ComponentPropsWithRef<"div"> & FormLabelType;
