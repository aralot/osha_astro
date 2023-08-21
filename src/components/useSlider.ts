import { useCallback, useRef } from 'react';

export function useSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const goToPrevSlide = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slideWidth = slider.children[0].clientWidth;

    slider.scroll({
      behavior: 'smooth',
      left: slider.scrollLeft - slideWidth,
    });
  }, []);

  const goToNextSlide = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slideWidth = slider.children[0].clientWidth;

    slider.scroll({
      behavior: 'smooth',
      left: slider.scrollLeft + slideWidth,
    });
  }, []);

  return {
    goToNextSlide,
    goToPrevSlide,
    sliderRef,
  };
}
