import { BannerCarrossel, BannerPromotion, Next, Prev, BannerContainer } from "./BannerStyles";
import React, { useState, useEffect } from "react";
import banner from "../../assets/images/ipad-card-40-pro-202108 1.png";
import { GrPrevious, GrNext } from "react-icons/gr";
import { useBanner } from "../../hooks/UseBanner";
export const Banner = () => {
 
  const {
    currentSlide,
    nextSlide,
    prevSlide,
    bgColor,
    prevBgColor,
    handleMouseEnter,
    handleMouseLeave,
    handleNextMouseLeave,
    handlePrevMouseLeave,
    slides
  } = useBanner();
  return (
    <BannerContainer>
      <BannerCarrossel bgColor={bgColor}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={
              index === currentSlide
                ? "slide active"
                : index < currentSlide
                ? "slide prev"
                : "slide next"
            }
          >
            <Prev
              onClick={prevSlide}
              onMouseEnter={handleNextMouseLeave}
              onMouseLeave={handlePrevMouseLeave}
              prevBgColor={prevBgColor}
            >
              <GrPrevious size={40} />
            </Prev>

            <BannerPromotion>
              <div>
                <h1>
                  {slide.content} <br /> <p>{slide.category}</p>
                  <button style={{cursor:'pointer'}}>35% OFF</button>
                </h1>
              </div>
              <img src={banner} />
            </BannerPromotion>

            <Next
              onClick={nextSlide}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              bgColor={bgColor}
            >
              <GrNext size={40} />
            </Next>
          </div>
        ))}
      </BannerCarrossel>
    </BannerContainer>
  );
};
