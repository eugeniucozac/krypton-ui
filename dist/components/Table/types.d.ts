import { ComponentPropsWithoutRef } from "react";
export type Padding = "default" | "none";
export type Align = "center" | "inherit" | "justify" | "left" | "right";
export type Size = "small" | "medium";
type AlignHeadingType = {
    align?: Align;
    heading?: boolean;
};
type StrippedType = {
    stripped?: boolean;
};
type SizeType = {
    size?: Size;
};
type WidthType = {
    width?: string;
};
type TableCommonType = StrippedType & SizeType & {
    children: React.ReactNode;
};
type TableType = TableCommonType & StrippedType & WidthType;
type TableRowType = TableCommonType & StrippedType & {
    hover?: boolean;
};
type TableColType = TableCommonType & AlignHeadingType;
export type SizeAlignStyledProps = AlignHeadingType & SizeType;
export type WidthStrippedStyledProps = StrippedType & WidthType;
export type TableHeadProps = ComponentPropsWithoutRef<"thead"> & TableCommonType;
export type TableBodyProps = ComponentPropsWithoutRef<"tbody"> & TableCommonType;
export type TableProps = ComponentPropsWithoutRef<"table"> & TableType;
export type TableRowProps = ComponentPropsWithoutRef<"tr"> & TableRowType;
export type TableColProps = ComponentPropsWithoutRef<"td"> & TableColType;
export {};
