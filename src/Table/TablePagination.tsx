import { memo, useState } from "react";
import Button from "../Button";
import Icon from "../Icon";
import { TablePaginationProps } from "./types";
import {
  Pagination,
  RowsPerPageOptions,
  RowsPerPage,
  PageControls,
} from "./Table.styles";

export const TablePagination = memo(
  (
    {
      page,
      count,
      rowsPerPage,
      rowsPerPageOptions,
      onPageChange,
      onRowsPerPageChange,
    }: TablePaginationProps,
    props
  ) => {
    const [rows, setRows] = useState(5);
    const [index, setIndex] = useState(1);

    const onChangeRows = (event: any) => {
      setRows(event.target.value);
    };

    const toPrev = () => {};

    const toFirst = () => {};

    const toLast = () => {};

    const toNext = () => {};

    const currentPage: any = 1;
    const from = currentPage !== 1 ? (currentPage - 1) * rows : 1;
    const to = currentPage * rows;

    return (
      <Pagination {...props}>
        <RowsPerPage>
          Rows per page:
          <select value={rows} onChange={onChangeRows}>
            {rowsPerPageOptions.map((row, iter) => (
              <option key={iter}>{row}</option>
            ))}
          </select>
        </RowsPerPage>
        <RowsPerPageOptions>
          <span>
            {from} - {to}
          </span>
          <span>of</span>
          <span>{count}</span>
        </RowsPerPageOptions>
        <PageControls>
          <Button model="icon" onClick={toFirst} disabled>
            <Icon name="firstPage" />
          </Button>
          <Button model="icon" onClick={toPrev}>
            <Icon name="navigateBefore" />
          </Button>
          <Button model="icon" onClick={toNext}>
            <Icon name="navigateNext" />
          </Button>
          <Button model="icon" onClick={toLast}>
            <Icon name="lastPage" />
          </Button>
        </PageControls>
      </Pagination>
    );
  }
);
