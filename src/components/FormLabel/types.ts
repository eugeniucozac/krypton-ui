import { ComponentPropsWithRef } from "react";

type FormLabelType = {
  children: string;
};

export type FormLabelProps = ComponentPropsWithRef<"div"> & FormLabelType;
