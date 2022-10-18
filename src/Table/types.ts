import {
  ComponentProps,
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
} from "react";

export type Padding = "default" | "none";

export type Align = "center" | "inherit" | "justify" | "left" | "right";

export type Size = "small" | "medium";

type TableCommonType = {
  children: React.ReactNode;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  className?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  size?: Size;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  stripped?: boolean;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

type TableType = TableCommonType & {
  width?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

type TableRowType = TableCommonType & {
  hover?: boolean;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  stripped?: boolean;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

type TableColType = TableCommonType & {
  padding?: Padding;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  align?: Align;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  tag?: "td" | "th";
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

type TablePaginationType = {
  className?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  page: number;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  count: number;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  rowsPerPage: number;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  rowsPerPageOptions: number[];
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  onPageChange: any;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  onRowsPerPageChange: any;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

export type SizeAlignStyledProps = {
  align: Align;
  size: Size;
};

export type WidthStrippedStyledProps = {
  width: string;
  stripped: boolean;
};

export type TableHeadProps = ComponentPropsWithRef<"thead"> & TableCommonType;

export type TableBodyProps = ComponentPropsWithRef<"tbody"> & TableCommonType;

export type TableFooterProps = ComponentPropsWithRef<"tfoot"> & TableCommonType;

export type TableProps = ComponentPropsWithRef<"table"> & TableType;

export type TableRowProps = ComponentPropsWithRef<"tr"> & TableRowType;

export type TableColProps = ComponentPropsWithRef<"td"> & TableColType;

export type TablePaginationProps = ComponentProps<"div"> & TablePaginationType;
