import { memo, useState, MouseEvent, MouseEventHandler } from "react";
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

const Autocomplete = memo(
  ({
    value,
    onChange,
    className,
    helperText,
    suggestions,
    fullWidth = false,
    ...props
  }: AutocompleteProps) => {
    const search = suggestions.filter((item) => item.includes(value));
    const [filteredSearch, setFilteredSearch] = useState(search);

    const componentProps = {
      ...defaultProps,
      ...props,
    };

    const handleChange = (
      event: any | MouseEvent<HTMLLIElement, MouseEvent>,
      newValue?: string
    ) => {
      if (newValue) {
        onChange(newValue as any);
        setFilteredSearch([]);
      } else {
        onChange(event.target.value);
        setFilteredSearch(search);
      }
    };

    return (
      <Wrapper className={className} fullWidth={fullWidth}>
        <AutocompleteField
          {...componentProps}
          type="search"
          value={value}
          fullWidth={fullWidth}
          onChange={(event) => handleChange(event)}
        />
        <Suggestions>
          {value &&
            filteredSearch.map((newValue) => (
              <li onClick={(event) => handleChange(event, newValue)}>
                {newValue}
              </li>
            ))}
        </Suggestions>
        {helperText && <HelperText>{helperText}</HelperText>}
      </Wrapper>
    );
  }
);

export default Autocomplete;
