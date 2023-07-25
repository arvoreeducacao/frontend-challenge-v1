import React, { forwardRef } from "react";
import SlickSlider from "react-slick";
import {
  ArrowNext,
  ArrowPrev,
  SliderWrapper,
} from "./styles";
import { ReactComponent as ArrowIconNext } from "../../assets/arrow-next-icon.svg";
import { ReactComponent as ArrowIconPrev } from "../../assets/arrow-prev-icon.svg";
import { CarouselProps } from "./types";

const ArrowButtonNext = ({onClick, className}: CarouselProps) => {
  return (
    <ArrowNext
      className={className}
      onClick={onClick}
    >
      <ArrowIconNext />
    </ArrowNext>
  );
}

const ArrowButtonPrev = ({onClick, className}: CarouselProps) => {

  return (
    <ArrowPrev
      className={className}
      onClick={onClick}
    >
      <ArrowIconPrev />
    </ArrowPrev>
  );
}

const Carousel: React.ForwardRefRenderFunction<SlickSlider, CarouselProps> = (
  { children, settings, spaceBetweenItems, className, onClick },
  ref
) => {
 
  return (
    <SliderWrapper spaceBetweenItems={spaceBetweenItems}>
      <SlickSlider
        ref={ref}
        {...settings}
        nextArrow={<ArrowButtonNext onClick={onClick} className={className}  />}
        prevArrow={<ArrowButtonPrev onClick={onClick} className={className} />}
      >
        {children}
      </SlickSlider>
    </SliderWrapper>
  );
};

export default forwardRef(Carousel);
