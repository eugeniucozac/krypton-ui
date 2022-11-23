import { ComponentPropsWithRef } from "react";

type FormLabelType = {
  children: React.ReactNode;
};

export type FormLabelProps = ComponentPropsWithRef<"div"> & FormLabelType;
