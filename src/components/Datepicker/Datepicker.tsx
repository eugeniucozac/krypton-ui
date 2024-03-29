import { ChangeEvent, forwardRef, memo, useEffect, useMemo, useRef, useState } from "react";
import dayjs, { type Dayjs } from "dayjs";
import Input from "../Input";
import Icon from "../Icon";
import { RowProps, CalendarProps } from "./types";
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
  InputWrapper,
} from "./Datepicker.styles";

const defaultProps: any = {
  placeholder: "",
  disabled: false,
  required: false,
  color: "secondary",
};

const Component = forwardRef<HTMLInputElement, CalendarProps>(
  (
    {
      selectedDate,
      onChange,
      fullWidth,
      placeholder,
      required,
      hideInput = false,
      ...props
    },
    ref
  ) => {
    const [focus, setFocus] = useState(false);
    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    const [isCalendarVisible, setIsCalendarVisible] = useState(false);
    const [chosenDate, setChosenDate] = useState(selectedDate);
    const calendarRef = useRef<any>(null);

    const handleChangeYearAndMonth = (date: Dayjs, isNextMonth: boolean) => {
      if (date.month() === 0 && !isNextMonth) {
        return date.set("year", date.year() - 1).set("month", 11);
      }

      if (date.month() === 11 && isNextMonth) {
        return date.set("year", date.year() + 1).set("month", 0);
      }

      return date.add(isNextMonth ? 1 : -1, "month");
    };

    const getCalendarRows = (date: Dayjs) => {
      const allDays = new Array(date.daysInMonth()).fill(1);

      const createCell = (date: Dayjs, day: number, currentMonth?: boolean) => ({
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
        .map((_: number, iter: number) =>
          createCell(lastMonth, lastMonth.daysInMonth() - iter, false)
        )
        .reverse();

      const nextMonthCell = Array.from(
        Array(Math.round(addCells / 2)).keys()
      ).map((_: number, iter: number) => createCell(nextMonth, iter + 1, false));

      const cells = [...lastMonthCell, ...monthCells, ...nextMonthCell];

      return cells.reduce((acc: any, _: RowProps, iter: number) => {
        if (iter % 7 === 0) {
          return [...acc, cells.slice(iter, iter + 7)];
        }
        return acc;
      }, []);
    };

    const rows = useMemo(() => getCalendarRows(chosenDate), [chosenDate]);

    const handleClickOutside = (event: Event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setIsCalendarVisible(false);
      }
    };

    useEffect(() => {
      setValue(dayjs(chosenDate).format("MM-DD-YYYY"))
    }, [chosenDate])
    

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

    const onChangeDate = (value: Dayjs) => {
      onChange(value);
      setIsCalendarVisible(false);
      if(dayjs(value, 'MM-DD-YYYY', true).isValid()){
        setError("");
        setChosenDate(value);
      }
    };

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setValue(value);
      if(dayjs(value, 'MM-DD-YYYY', true).isValid()){
        setError("");
        onChangeDate(dayjs(value));
      }else{
        setError("Invalid Format");
      }
    };

    const componentProps = {
      ...defaultProps,
      ...props,
    };

    return (
      <Wrapper ref={calendarRef} fullWidth={fullWidth} endIcon={true}>
        {!hideInput && (
          <InputWrapper>
            <Input
              {...componentProps}
              ref={ref}
              value={value}
              onFocus={handleFocus}
              fullWidth={fullWidth}
              onChange={onChangeInput}
              endIcon={<Icon name="calendarToday" />}
              error={error}
              />
          </InputWrapper>
        )}
        {((focus && isCalendarVisible) || hideInput) && (
          <CalendarWrapper hideInput={hideInput}>
            <YearMonth>
              <Prev
                onClick={() =>
                  setChosenDate(handleChangeYearAndMonth(chosenDate, false))
                }
              >
                <Icon name="navigateBefore" />
              </Prev>
              <div>{chosenDate.format("MMMM YYYY")}</div>
              <Next
                onClick={() =>
                  setChosenDate(handleChangeYearAndMonth(chosenDate, true))
                }
              >
                <Icon name="navigateNext" />
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

const Datepicker = memo(Component);

export default Datepicker;
