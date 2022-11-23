import { ComponentPropsWithRef } from "react";

export type Padding = "default" | "none";

export type Align = "center" | "inherit" | "justify" | "left" | "right";

export type Size = "small" | "medium";

type TableCommonType = {
  children: React.ReactNode;
  size?: Size;
  stripped?: boolean;
};

type TableType = TableCommonType & {
  width?: string;
};

type TableRowType = TableCommonType & {
  hover?: boolean;
  stripped?: boolean;
};

type TableColType = TableCommonType & {
  align?: Align;
  heading?: boolean;
};

export type SizeAlignStyledProps = {
  align?: Align;
  size?: Size;
  heading?: boolean;
};

export type WidthStrippedStyledProps = {
  width?: string;
  stripped?: boolean;
};

export type TableHeadProps = ComponentPropsWithRef<"thead"> & TableCommonType;

export type TableBodyProps = ComponentPropsWithRef<"tbody"> & TableCommonType;

export type TableProps = ComponentPropsWithRef<"table"> & TableType;

export type TableRowProps = ComponentPropsWithRef<"tr"> & TableRowType;

export type TableColProps = ComponentPropsWithRef<"td"> & TableColType;
