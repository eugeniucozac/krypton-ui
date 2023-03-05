import React, { memo, useState, useEffect } from "react";
import Button from "../Button";
import Icon from "../Icon";
import { CarouselProps, IndicatorStyledProps } from "./types";
import { Wrapper, Indicators, Indicator, Inner } from "./Carousel.styles";

export const Carousel = memo(
  ({
    children,
    controls = true,
    indicators = false,
    activeIndex = 0,
    autoPlay = false,
    interval = 5000,
    ...props
  }: CarouselProps) => {
    const [index, setIndex] = useState(activeIndex);
    const childrenLength = React.Children.count(children);

    const toPrev = () => {
      if (index === 0) {
        setIndex(childrenLength - 1);
      } else {
        setIndex((prevState) => prevState - 1);
      }
    };

    const toNext = () => {
      if (index === childrenLength - 1) {
        setIndex(0);
      } else {
        setIndex((prevState) => prevState + 1);
      }
    };

    useEffect(() => {
      if (autoPlay) {
        if (index > childrenLength - 1) {
          setIndex(0);
        }
        const id = setInterval(
          () => setIndex((prevState) => prevState + 1),
          interval
        );
        return () => clearInterval(id);
      }
    }, [index, autoPlay, childrenLength, interval]);

    const toSlide = (index: number) => {
      setIndex(index);
    };

    return (
      <Wrapper {...props}>
        <Inner>
          {React.Children.map(children, (child, iter) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                active: index === iter,
              } as IndicatorStyledProps);
            }
          })}
        </Inner>
        {indicators && (
          <Indicators>
            {children.map((_, iter) => (
              <Indicator
                onClick={() => toSlide(iter)}
                active={index === iter}
              />
            ))}
          </Indicators>
        )}
        {controls && (
          <>
            <Button variant="icon" onClick={toPrev}>
              <Icon name="navigateBefore" />
            </Button>
            <Button variant="icon" onClick={toNext}>
              <Icon name="navigateNext" />
            </Button>
          </>
        )}
      </Wrapper>
    );
  }
);
