import { memo, useEffect, useRef, useState } from "react";
import { InputProps } from "./types";
import Calendar from "../Calendar";
import {
  Wrapper,
  InputField,
  HelperText,
  CalendarWrapper,
} from "./Datepicker.styles";
import { format, getUnixTime } from "date-fns";
import dayjs from "dayjs";
import Icon from "../Icon";

const defaultProps: Partial<InputProps> = {
  placeholder: "",
  disabled: false,
  required: false,
  error: false,
  readOnly: false,
  color: "secondary",
};

const Input = memo(
  ({
    value,
    onChange,
    className,
    beginIcon,
    endIcon,
    helperText,
    type = "text",
    fullWidth = false,
    ...props
  }: InputProps) => {
    const [focus, setFocus] = useState(false);
    const [isCalendarVisible, setIsCalendarVisible] = useState(false);
    const ref = useRef<any>(null);

    const componentProps = {
      ...defaultProps,
      ...props,
    };

    const handleClickOutside = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsCalendarVisible(false);
      }
    };

    const handleFocus = () => {
      if (type === "date") {
        setFocus(true);
        setIsCalendarVisible(true);
      }
    };

    useEffect(() => {
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        document.removeEventListener("click", handleClickOutside, true);
      };
    }, []);

    const onChangeDate = (value: any) => {
      onChange(value);
      setIsCalendarVisible(false);
    };

    if (type === "date") {
      const formattedDate = format(new Date(value), "dd/MM/yyyy");
    }

    return (
      <Wrapper
        ref={ref}
        className={className}
        type={type}
        fullWidth={fullWidth}
        beginIcon={beginIcon}
        endIcon={endIcon || type === "date"}
      >
        {beginIcon}
        <InputField
          {...componentProps}
          value={value}
          onChange={type !== "date" ? onChange : () => {}}
          onFocus={handleFocus}
          type={type === "date" ? "text" : type}
          fullWidth={fullWidth}
          beginIcon={beginIcon}
          endIcon={endIcon || type === "date"}
        />
        {endIcon}
        {type === "date" && <Icon name="calendarToday" />}
        {helperText && <HelperText>{helperText}</HelperText>}
        {type === "date" && focus && isCalendarVisible && (
          <CalendarWrapper>
            <Calendar selectedDate={value} onChange={onChangeDate} />
          </CalendarWrapper>
        )}
      </Wrapper>
    );
  }
);

export default Input;
