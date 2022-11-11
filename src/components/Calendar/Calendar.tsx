import { memo, useMemo, useState } from "react";
import {
  Wrapper,
  YearMonth,
  Prev,
  Next,
  Header,
  Cell,
  Row,
  RowCell,
} from "./Calendar.styles";
import { Icon } from "./Icon";

const Calendar = memo(({ selectedDate, onChange }: any) => {
  const [shownDate, setShownDate] = useState(selectedDate.clone());

  const handleChangeYearMonth = (date: any, isNextMonth: boolean) => {
    if (date.month() === 0 && !isNextMonth) {
      return date.set("year", date.year() - 1).set("month", 11);
    }

    if (date.month() === 11 && isNextMonth) {
      return date.set("year", date.year() + 1).set("month", 0);
    }

    return date.add(isNextMonth ? 1 : -1, "month");
  };

  const getCalendarCells = (date: any) => {
    const daysArray = new Array(date.daysInMonth()).fill(1);
    const calendarCells: any = [];

    const prepareCell = (date: any, dayNumber: number) => {
      return {
        text: String(dayNumber),
        value: date.clone().set("date", dayNumber),
      };
    };
    daysArray.forEach((_, i) => {
      calendarCells.push(prepareCell(date, i + 1));
    });

    const cellsToAdd = 35 - daysArray.length;

    const lastMonth = date.subtract(1, "month");
    for (let i = 0; i < Math.floor(cellsToAdd / 2); i++) {
      calendarCells.unshift(
        prepareCell(lastMonth, lastMonth.daysInMonth() - i)
      );
    }

    const nextMonth = date.add(1, "month");
    for (let i = 0; i < Math.round(cellsToAdd / 2); i++) {
      calendarCells.push(prepareCell(nextMonth, i + 1));
    }

    return calendarCells;
  };

  const getCalendarRows = (date: any) => {
    const cells = getCalendarCells(date);
    const rows: any = [];

    for (let i = 0; i < cells.length; i += 7) {
      rows.push(cells.slice(i, i + 7));
    }

    return rows;
  };

  const rows = useMemo(() => getCalendarRows(shownDate), [shownDate]);

  return (
    <Wrapper>
      <YearMonth>
        <Prev
          onClick={() => setShownDate(handleChangeYearMonth(shownDate, false))}
        >
          <Icon />
        </Prev>
        <div>{shownDate.format("MMMM YYYY")}</div>
        <Next
          onClick={() => setShownDate(handleChangeYearMonth(shownDate, true))}
        >
          <Icon />
        </Next>
      </YearMonth>
      <Header>
        {rows[0].map(({ value }: any, i: any) => (
          <Cell key={i}>{value.format("dd")}</Cell>
        ))}
      </Header>
      {rows.map((cells: any, rowIndex: any) => (
        <Row key={rowIndex}>
          {cells.map(({ text, value }: any, i: any) => (
            <RowCell
              key={`${text} - ${i}`}
              selected={value.toString() === selectedDate.toString()}
              onClick={() => onChange(value)}
            >
              {text}
            </RowCell>
          ))}
        </Row>
      ))}
    </Wrapper>
  );
});

export default Calendar;
