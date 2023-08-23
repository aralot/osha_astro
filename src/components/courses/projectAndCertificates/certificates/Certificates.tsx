import React, { FunctionComponent, useCallback, useState } from 'react';

import { Icons } from '../../../ui-kit';

import { Container, Image, ButtonRight, ButtonLeft } from './styles';

import cert1 from './cert1.webp';
import cert2 from './cert2.webp';
import cert3 from './cert3.webp';
import cert4 from './cert4.webp';
import cert5 from './cert5.webp';
import cert6 from './cert6.webp';
import cert7 from './cert7.webp';
import cert8 from './cert8.webp';
import cert9 from './cert9.webp';

const Certificates: FunctionComponent = () => {
  const images = [
    cert1,
    cert2,
    cert3,
    cert4,
    cert5,
    cert6,
    cert7,
    cert8,
    cert9,
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goToPrev = useCallback(() => {
    setCurrentSlideIndex(
      index => (index === 0 ? images.length - 1 : index - 1) % images.length,
    );
  }, []);

  const goToNext = useCallback(() => {
    setCurrentSlideIndex(index => (index + 1) % images.length);
  }, []);

  return (
    <Container>
      {images.map((url, index) => (
        <Image
          key={index}
          $isCurrent={index === currentSlideIndex}
          $src={url}
          loading="lazy"
        />
      ))}
      <ButtonLeft onClick={goToPrev}>
        <Icons.large.arrowLeft />
      </ButtonLeft>
      <ButtonRight onClick={goToNext}>
        <Icons.large.arrowRight />
      </ButtonRight>
    </Container>
  );
};

export default Certificates;
