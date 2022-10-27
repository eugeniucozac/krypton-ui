import { memo, useRef } from "react";
import { RangeProps } from "./types";
import { Details, Slider, RangeInput, Handle, Wrapper } from "./Range.styles";

const Range = memo(
  ({
    details,
    onChange,
    initial,
    max,
    color = "success",
    ...props
  }: RangeProps) => {
    const getPercentage = (current: number, max: number) =>
      (100 * current) / max;

    const getValue = (percentage: number, max: number) =>
      (max / 100) * percentage;

    const getLeft = (percentage: number) => `calc(${percentage}% - 5px)`;

    const initialPercentage = getPercentage(initial, max);
    const sliderRef = useRef<HTMLDivElement>(null);
    const handleRef = useRef<HTMLDivElement>(null);
    const rangeInputRef = useRef<HTMLDivElement>(null);
    const currentRef = useRef<HTMLDivElement>(null);
    const diffRef = useRef<number>(0);
    var end = 0;
    var newX = 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (sliderRef.current) {
        newX =
          event.clientX -
          diffRef.current -
          sliderRef.current.getBoundingClientRect().left;
      }

      if (sliderRef.current && handleRef.current) {
        end = sliderRef.current.offsetWidth - handleRef.current.offsetWidth;
      }

      const start = 0;

      if (newX < start) {
        newX = 0;
      }

      if (newX > end) {
        newX = end;
      }

      const newPercentage = getPercentage(newX, end);
      const newValue = getValue(newPercentage, max);

      if (handleRef.current) {
        handleRef.current.style.left = getLeft(newPercentage);
      }

      if (rangeInputRef.current) {
        rangeInputRef.current.style.width = getLeft(newPercentage);
      }

      if (currentRef.current) {
        currentRef.current.textContent = newValue.toFixed();
      }

      onChange(newValue);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    };

    const handleMouseDown = (event: React.MouseEvent) => {
      if (handleRef.current) {
        diffRef.current =
          event.clientX - handleRef.current.getBoundingClientRect().left;
      }
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    return (
      <Wrapper {...props}>
        {details && (
          <Details color={color}>
            <span ref={currentRef}>{initial}</span>/{max}
          </Details>
        )}
        <Slider color={color} ref={sliderRef}>
          <RangeInput
            color={color}
            style={{ width: getLeft(initialPercentage) }}
            ref={rangeInputRef}
          />
          <Handle
            color={color}
            style={{ left: getLeft(initialPercentage) }}
            ref={handleRef}
            onMouseDown={handleMouseDown}
          />
        </Slider>
      </Wrapper>
    );
  }
);

export default Range;
