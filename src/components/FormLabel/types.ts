import { ComponentPropsWithoutRef } from "react";

type FormLabelType = {
  children: string;
};

export type FormLabelProps = ComponentPropsWithoutRef<"div"> & FormLabelType;
