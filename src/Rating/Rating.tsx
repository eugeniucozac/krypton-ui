import { memo } from "react";
import Icon from "../Icon";
import { uuid } from "../utils/string";
import { RatingProps } from "./types";
import { Wrapper, Star, Input } from "./Rating.styles";

const Rating = memo(
  (
    {
      variant = "controlled",
      size = "md",
      color = "success",
      value,
      onChangeValue,
    }: RatingProps,
    props
  ) => {
    const stars = Array(5).fill(0);
    const uuidv4 = uuid();

    return (
      <Wrapper color={color} variant={variant} {...props}>
        {stars.map((_, iter) => {
          const iterator = iter + 1;
          const icons = Array(iterator).fill(0);
          return (
            <Star key={iter} color={color} variant={variant}>
              <Input
                type="radio"
                onChange={(e) => onChangeValue(e.target.value)}
                value={iterator}
                name={`stars-${uuidv4}`}
                variant={variant}
                checked={iterator === Number(value)}
                disabled={variant === "disabled"}
              />
              {icons.map((_, iter) => (
                <Icon
                  key={iter}
                  name="star"
                  size={size}
                  color="rgb(193, 193, 193)"
                />
              ))}
            </Star>
          );
        })}
      </Wrapper>
    );
  }
);

export default Rating;
