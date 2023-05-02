import { useEffect, useState } from "react";

export const useBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [bgColor, setBgColor] = useState("#F6AE2D");
  const [prevBgColor, setPrevBgColor] = useState("#F6AE2D");
  const slides = [
    { id: 1, content: "  Exclusive Deals", category: '"for new ipads' },
    { id: 2, content: "Melhores Iphones", category: '"for new Iphone' },
    { id: 3, content: "Melhores Macbooks", category: '"for new Macbooks' },
    { id: 4, content: "Melhores Ofertas", category: '"for new Ofertas' },
    { id: 5, content: "os Mais Comprados", category: '"for new ipads' },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        currentSlide === slides.length - 1 ? 0 : currentSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const handleMouseEnter = () => {
    setBgColor("#d88213");
  };

  const handleMouseLeave = () => {
    setBgColor("#F6AE2D");
  };

  const handleNextMouseLeave = () => {
    setPrevBgColor("#d88213");
  };

  const handlePrevMouseLeave = () => {
    setPrevBgColor("#F6AE2D");
  };

  return {
    currentSlide,
    nextSlide,
    prevSlide,
    bgColor,
    slides,
    prevBgColor,
    handleMouseEnter,
    handleMouseLeave,
    handleNextMouseLeave,
    handlePrevMouseLeave,
  };
};
