import { ComponentPropsWithRef } from "react";

type FormType = {
  children: React.ReactNode;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

export type FormProps = ComponentPropsWithRef<"form"> & FormType;
