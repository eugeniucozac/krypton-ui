import { memo, useEffect, useMemo, useRef, useState } from "react";
import { getMonth, getYear } from "date-fns";
import Icon from "../Icon";
import { IconN } from "./IconN";
import { RowProps } from "./types";
import {
  CalendarWrapper,
  YearMonth,
  Prev,
  Next,
  Header,
  Cell,
  Row,
  RowCell,
  Wrapper,
  InputField,
} from "./Calendar.styles";
import dayjs from "dayjs";

const defaultProps: any = {
  placeholder: "",
  disabled: false,
  required: false,
  color: "secondary",
};

const Calendar = memo(
  ({
    selectedDate,
    onChange,
    fullWidth,
    placeholder,
    required,
    ...props
  }: any) => {
    const [focus, setFocus] = useState(false);
    const [isCalendarVisible, setIsCalendarVisible] = useState(false);
    const ref = useRef<any>(null);
    const [chosenDate, setChosenDate] = useState(selectedDate);

    const handleChangeYearAndMonth = (date: any, isNextMonth: boolean) => {
      if (date.month() === 0 && !isNextMonth) {
        return date.set("year", date.year() - 1).set("month", 11);
      }

      if (date.month() === 11 && isNextMonth) {
        return date.set("year", date.year() + 1).set("month", 0);
      }

      return date.add(isNextMonth ? 1 : -1, "month");
    };

    const getCalendarRows = (date: any, customDate: any) => {
      const allDays = new Array(date.daysInMonth()).fill(1);

      const createCell = (date: any, day: number, currentMonth?: boolean) => ({
        day,
        value: date.clone().set("date", day),
        currentMonth,
      });

      const monthCells = allDays.map((_: number[], iter: number) =>
        createCell(date, iter + 1, true)
      );

      const addCells = 35 - allDays.length;
      const lastMonth = date.subtract(1, "month");
      const nextMonth = date.add(1, "month");

      const lastMonthCell = Array.from(Array(Math.floor(addCells / 2)).keys())
        .map((_: any, iter: number) =>
          createCell(lastMonth, lastMonth.daysInMonth() - iter, false)
        )
        .reverse();

      const nextMonthCell = Array.from(
        Array(Math.round(addCells / 2)).keys()
      ).map((_: any, iter: number) => createCell(nextMonth, iter + 1, false));

      const cells = [...lastMonthCell, ...monthCells, ...nextMonthCell];

      return cells.reduce((acc: any, _: RowProps, iter: number) => {
        if (iter % 7 === 0) {
          return [...acc, cells.slice(iter, iter + 7)];
        }
        return acc;
      }, []);
    };

    const rows = useMemo(
      () => getCalendarRows(chosenDate, new Date(selectedDate)),
      [chosenDate]
    );

    const handleClickOutside = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsCalendarVisible(false);
      }
    };

    const handleFocus = () => {
      setFocus(true);
      setIsCalendarVisible(true);
    };

    useEffect(() => {
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        document.removeEventListener("click", handleClickOutside, true);
      };
    }, []);

    const onChangeDate = (value: any) => {
      onChange(value);
      setChosenDate(value);
      setIsCalendarVisible(false);
    };

    const componentProps = {
      ...defaultProps,
      ...props,
    };

    return (
      <Wrapper ref={ref} fullWidth={fullWidth} endIcon={true}>
        <InputField
          {...componentProps}
          value={dayjs(chosenDate).format("MM-DD-YYYY")}
          onFocus={handleFocus}
          fullWidth={fullWidth}
          endIcon={true}
        />
        <Icon name="calendarToday" />
        {focus && isCalendarVisible && (
          <CalendarWrapper>
            <YearMonth>
              <Prev
                onClick={() =>
                  setChosenDate(handleChangeYearAndMonth(chosenDate, false))
                }
              >
                <IconN />
              </Prev>
              <div>{chosenDate.format("MMMM YYYY")}</div>
              <Next
                onClick={() =>
                  setChosenDate(handleChangeYearAndMonth(chosenDate, true))
                }
              >
                <IconN />
              </Next>
            </YearMonth>
            <Header>
              {rows[0].map((row: RowProps, iter: number) => (
                <Cell key={iter}>{row.value.format("ddd")}</Cell>
              ))}
            </Header>
            {rows.map((cells: RowProps[], iter: number) => (
              <Row key={iter}>
                {cells.map(
                  ({ day, value, currentMonth }: RowProps, iter: number) => (
                    <RowCell
                      key={`${day}-${iter}`}
                      currentMonth={currentMonth}
                      selected={value.toString() === selectedDate.toString()}
                      onClick={() => onChangeDate(value)}
                    >
                      {day}
                    </RowCell>
                  )
                )}
              </Row>
            ))}
          </CalendarWrapper>
        )}
      </Wrapper>
    );
  }
);

export default Calendar;
