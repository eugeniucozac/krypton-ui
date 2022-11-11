import { Dayjs } from "dayjs";

export const changeDateMonth = (date: Dayjs, isNextMonth: boolean) => {
  if (date.month() === 0 && !isNextMonth) {
    return date.set("year", date.year() - 1).set("month", 11);
  }

  if (date.month() === 11 && isNextMonth) {
    return date.set("year", date.year() + 1).set("month", 0);
  }

  return date.add(isNextMonth ? 1 : -1, "month");
};

const getCalendarCells = (date: Dayjs) => {
  const daysArray = new Array(date.daysInMonth()).fill(1);
  const calendarCells: any = [];

  const prepareCell = (date: Dayjs, dayNumber: number) => {
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
    calendarCells.unshift(prepareCell(lastMonth, lastMonth.daysInMonth() - i));
  }

  const nextMonth = date.add(1, "month");
  for (let i = 0; i < Math.round(cellsToAdd / 2); i++) {
    calendarCells.push(prepareCell(nextMonth, i + 1));
  }

  return calendarCells;
};

export const getCalendarRows = (date: Dayjs) => {
  const cells = getCalendarCells(date);
  const rows: any = [];

  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7));
  }

  return rows;
};
