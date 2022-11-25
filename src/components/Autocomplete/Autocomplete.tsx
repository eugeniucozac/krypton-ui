import {
  memo,
  useState,
  useEffect,
  useMemo,
  ChangeEvent,
  forwardRef,
} from "react";
import ReactHtmlParser from "react-html-parser";
import { AutocompleteProps } from "./types";
import {
  Wrapper,
  AutocompleteField,
  HelperText,
  Suggestions,
} from "./Autocomplete.styles";

const defaultProps: Partial<AutocompleteProps> = {
  placeholder: "",
  disabled: false,
  required: false,
  error: false,
  readOnly: false,
  color: "secondary",
};

const Component = forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    {
      value,
      onChange,
      className,
      helperText,
      suggestions,
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    const search = useMemo(() => {
      if (!value) return [];
      return suggestions.filter((item) => item.includes(value));
    }, [suggestions, value]);
    const [searchOptions, setSearchOptions] = useState(search);
    const [open, setOpen] = useState(true);

    const componentProps = {
      ...defaultProps,
      ...props,
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
      setOpen(true);
    };

    useEffect(() => {
      setSearchOptions(search);
    }, [search]);

    const handleClick = (suggestion: string) => {
      onChange(suggestion);
      setOpen(false);
    };

    return (
      <Wrapper className={className} fullWidth={fullWidth}>
        <AutocompleteField
          {...componentProps}
          ref={ref}
          type="search"
          value={value}
          fullWidth={fullWidth}
          onChange={handleChange}
        />
        {open && searchOptions.length ? (
          <Suggestions>
            {searchOptions.map((s) => {
              const bOfS = s.indexOf(value);
              const result = `${s.slice(0, bOfS)}<strong>${s.slice(
                bOfS,
                value.length
              )}</strong>${s.slice(value.length, s.length)}`;
              return (
                <li onClick={() => handleClick(s)}>
                  {ReactHtmlParser(result)}
                </li>
              );
            })}
          </Suggestions>
        ) : null}
        {helperText && <HelperText>{helperText}</HelperText>}
      </Wrapper>
    );
  }
);

const Autocomplete = memo(Component);

export default Autocomplete;
