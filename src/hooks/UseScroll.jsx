import { useRef } from "react";

export const useScroll = () => {
  const ref = useRef(null);

  const scrollLeft = () => {
    const container = ref.current;
    if (container) {
      container.scrollLeft -= 150;
    }
  };

  const scrollRight = () => {
    const container = ref.current;
    if (container) {
      container.scrollLeft += 150;
    }
  };

  return { ref, scrollLeft, scrollRight };
};
