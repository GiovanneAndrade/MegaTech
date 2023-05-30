import React, { useEffect, useState } from "react";
import {
  ContainerSlide,
  ImageBottom,
  SlideshowContainer,
} from "./SlideImgProductsStyles";
import { ProductContext } from "../../contexts/ProductContext";

export const SlideImgProducts = () => {
  const { productOverview, setProductOverview } =
    React.useContext(ProductContext);
  const [slides, setSlides] = useState([]);

  const [currentCaption, setCurrentCaption] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const newSlides = [
      { image: productOverview?.image, caption: productOverview?.image },
    ];
    setSlides(newSlides);
    setCurrentCaption(newSlides[0]?.caption);
  }, [productOverview?.image]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, slides]);

  const handlePrevSlide = () => {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(newIndex);
    setCurrentCaption(slides[newIndex].caption);
  };

  const handleNextSlide = () => {
    const newIndex = (currentSlide + 1) % slides.length;
    setCurrentSlide(newIndex);
    setCurrentCaption(slides[newIndex].caption);
  };

  return (
    <ContainerSlide>
      <SlideshowContainer>
        <button className="btn prev" onClick={handlePrevSlide}>
          <i className="fa fa-chevron-left">prev</i>
        </button>
        <button className="btn next" onClick={handleNextSlide}>
          <i className="fa fa-chevron-right">next</i>
        </button>
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            className={index === currentSlide ? "active" : ""}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </SlideshowContainer>
      <ImageBottom>
        <img src={currentCaption} />
      </ImageBottom>
    </ContainerSlide>
  );
};
