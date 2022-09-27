import React, { memo, useState, useEffect } from "react";
import Button from "../Button";
import Icon from "../Icon";
import { CarouselProps } from "./types";
import { Wrapper, Indicators, Indicator, Inner } from "./Carousel.styles";

export const Carousel = memo(
  (
    {
      children,
      controls = true,
      indicators = false,
      activeIndex = 0,
      autoPlay = false,
      interval = 5000,
    }: CarouselProps,
    props
  ) => {
    const [index, setIndex] = useState(activeIndex);
    const timer = () => setIndex(index + 1);

    const toPrev = () => {
      if (index === 0) {
        setIndex(children.length - 1);
      } else {
        setIndex((prevState) => prevState - 1);
      }
    };

    const toNext = () => {
      if (index === children.length - 1) {
        setIndex(0);
      } else {
        setIndex((prevState) => prevState + 1);
      }
    };

    useEffect(() => {
      if (autoPlay) {
        if (index > children.length - 1) {
          setIndex(0);
        }
        const id = setInterval(timer, interval);
        return () => clearInterval(id);
      }
    }, [index]);

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
              });
            }
          })}
        </Inner>
        {indicators && (
          <>
            <Indicators>
              {children.map((item, iter) => (
                <Indicator
                  onClick={() => toSlide(iter)}
                  active={index === iter}
                />
              ))}
            </Indicators>
          </>
        )}
        {controls && (
          <>
            <Button model="icon" onClick={toPrev}>
              <Icon name="navigateBefore" />
            </Button>
            <Button model="icon" onClick={toNext}>
              <Icon name="navigateNext" />
            </Button>
          </>
        )}
      </Wrapper>
    );
  }
);
