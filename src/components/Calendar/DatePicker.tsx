import { useState, useMemo } from "react";
import dayjs from "dayjs";
import clsx from "clsx";
import { ChevronDownIcon } from "./ChevronDownIcon";
import { changeDateMonth, getCalendarRows } from "./utils";
import "./DatePicker.css";

export const DatePicker = ({
  selectedDate,
  selectorDateFormat = dayjs(),
  onChange,
}: any) => {
  const [shownDate, setShownDate] = useState(selectedDate.clone());
  const rows = useMemo(() => getCalendarRows(shownDate), [shownDate]);

  return (
    <div className={"DatePicker"}>
      <div className={"DatePickerSelector"}>
        <div
          className={clsx(
            "DatePickerSelector__icon",
            "DatePickerSelector__iconLeft"
          )}
          onClick={() => setShownDate(changeDateMonth(shownDate, false))}
        >
          <ChevronDownIcon />
        </div>
        <div className={"DatePickerSelector__date"}>
          {shownDate.format("MMMM YYYY")}
        </div>
        <div
          className={clsx(
            "DatePickerSelector__icon",
            "DatePickerSelector__iconRight"
          )}
          onClick={() => setShownDate(changeDateMonth(shownDate, true))}
        >
          <ChevronDownIcon />
        </div>
      </div>
      <>
        <div className={"DatePickerCalendar__header"}>
          {rows[0].map(({ value }: any, i: any) => (
            <div key={i} className={"DatePickerCalendar__cell"}>
              {value.format("dd")}
            </div>
          ))}
        </div>
        {rows.map((cells: any, rowIndex: any) => (
          <div key={rowIndex} className={"DatePickerCalendar__row"}>
            {cells.map(({ text, value }: any, i: any) => (
              <div
                key={`${text} - ${i}`}
                className={clsx(
                  "DatePickerCalendar__cell",
                  "DatePickerCalendar__dayCell",
                  {
                    DatePickerCalendar__dayCell_selected:
                      value.toString() === selectedDate.toString(),
                  }
                )}
                onClick={() => onChange(value)}
              >
                {text}
              </div>
            ))}
          </div>
        ))}
      </>
    </div>
  );
};
