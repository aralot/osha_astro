import React, { FunctionComponent, useCallback, useState } from 'react';

import { useSlider } from '../useSlider';
import { usePopup } from '../usePopup';
import { H2, H3, Icons, P2Long, P2Short, Popup } from '../ui-kit';

import {
  Container,
  Head,
  Button,
  Buttons,
  Title,
  Emoji,
  Slider,
  Slide,
  Stars,
  Star,
  SlideViewFull,
  Content,
  ContentText,
  AuthorName,
  PopupContent,
} from './styles';
import { reviews } from './data';
import { IReview } from './types';

const Reviews: FunctionComponent = () => {
  const { goToNextSlide, goToPrevSlide, sliderRef } = useSlider();
  const { closePopup, isPopupVisible, openPopup } = usePopup();

  const [previewItem, setPreviewItem] = useState<IReview | null>(null);

  const openPreview = useCallback(
    (item: IReview) => {
      setPreviewItem(item);
      openPopup();
    },
    [openPopup],
  );

  return (
    <Container id="reviews">
      <Head>
        <Title>
          Вот что говорят наши студенты, их родители и бабушки <Emoji />
        </Title>
        <Buttons>
          <Button onClick={goToPrevSlide}>
            <Icons.large.arrowLeft />
          </Button>
          <Button onClick={goToNextSlide}>
            <Icons.large.arrowRight />
          </Button>
        </Buttons>
      </Head>
      <Slider ref={sliderRef}>
        {reviews.map((item, index) => (
          <Slide
            key={index}
            $bgImage={item.photo}
            onClick={() => openPreview(item)}
          >
            <Stars>
              {[1, 2, 3, 4, 5].map(val => (
                <Star key={val} $isActive={val <= item.rating} />
              ))}
            </Stars>
            <Content>
              <AuthorName>{item.name}</AuthorName>
              <ContentText>{item.preview}</ContentText>
            </Content>
            <SlideViewFull>
              <span>Весь отзыв</span>
              <Icons.small.arrowRight />
            </SlideViewFull>
          </Slide>
        ))}
      </Slider>
      <Popup isVisible={isPopupVisible} onClose={closePopup} isRtl={false}>
        {previewItem && (
          <PopupContent>
            <H2>{previewItem.name}:</H2>
            <H3>«{previewItem.preview}»</H3>
            <br />
            <P2Long>{previewItem.text}</P2Long>
            <br />
            <br />
            <P2Short>
              {previewItem.course.length === 1 ? 'Курс: ' : 'Курсы: '}
              {previewItem.course.join(', ')}
            </P2Short>
          </PopupContent>
        )}
      </Popup>
    </Container>
  );
};

export default Reviews;
