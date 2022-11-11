import { ComponentPropsWithRef } from "react";

type FormLabelType = {
  children: React.ReactNode;
  text: string;
};

export type FormLabelProps = ComponentPropsWithRef<"div"> & FormLabelType;
