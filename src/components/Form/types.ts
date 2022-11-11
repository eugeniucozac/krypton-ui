import { ComponentPropsWithRef } from "react";

type FormType = {
  children: React.ReactNode;
};

export type FormProps = ComponentPropsWithRef<"form"> & FormType;
