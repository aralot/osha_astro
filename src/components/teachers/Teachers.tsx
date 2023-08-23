import React, { FunctionComponent } from 'react';

import { Icons } from '../ui-kit';
import { useSlider } from '../useSlider';

import {
  Button,
  Buttons,
  Container,
  Head,
  Slide,
  SlideBadge,
  SlideBadges,
  SlideFooter,
  SlideFooterColumn,
  SlideFooterText,
  SlideHead,
  SlideHeadLabel,
  SlideHeadTitle,
  SlideImage,
  Slider,
  Title,
} from './styles';

import photo1 from './photo1.png';
import photo2 from './photo2.webp';
import photo3 from './photo3.webp';
import photo4 from './photo4.webp';
import photo5 from './photo5.webp';

const Teachers: FunctionComponent = () => {
  const { goToNextSlide, goToPrevSlide, sliderRef } = useSlider();
  return (
    <Container id="teachers">
      <Head>
        <Title>Наши преподаватели</Title>
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
        <Slide>
          <SlideHead $bgColor="#e6ffe2" $bgImg={photo1}>
            <SlideImage src={photo1} loading="lazy" />
            <SlideHeadTitle>Сергей Козлов</SlideHeadTitle>
            <SlideHeadLabel>Преподает 5 лет</SlideHeadLabel>
            <SlideBadges>
              <SlideBadge $left={50} $top={190} $rotate={-4} $color="#18CB3F">
                Программист
              </SlideBadge>
              <SlideBadge $left={116} $top={225} $rotate={1.3} $color="#18CB3F">
                и пианист
              </SlideBadge>
            </SlideBadges>
          </SlideHead>
          <SlideFooter>
            <SlideFooterColumn>
              <Icons.small.plus style={{ color: '#18CB3F' }} />
              <SlideFooterText>
                Работает в детском центре развития «Чудо-школа Умница»
              </SlideFooterText>
            </SlideFooterColumn>
            <SlideFooterColumn>
              <Icons.small.plus style={{ color: '#18CB3F' }} />
              <SlideFooterText>
                Выпускник школы программирования от Сбера «Школа 21»
              </SlideFooterText>
            </SlideFooterColumn>
          </SlideFooter>
        </Slide>
        <Slide>
          <SlideHead $bgColor="#edf7ff" $bgImg={photo2}>
            <SlideImage src={photo2} loading="lazy" />
            <SlideHeadTitle>Альбина Анисимова</SlideHeadTitle>
            <SlideHeadLabel>Преподает 7 лет</SlideHeadLabel>
            <SlideBadges>
              <SlideBadge $left={40} $top={200} $rotate={1.17} $color="#4EA9FE">
                Обучаю детей
              </SlideBadge>
              <SlideBadge $left={70} $top={234} $rotate={-3.5} $color="#4EA9FE">
                в игровой форме
              </SlideBadge>
            </SlideBadges>
          </SlideHead>
          <SlideFooter>
            <SlideFooterColumn>
              <Icons.small.plus style={{ color: '#4EA9FE' }} />
              <SlideFooterText>
                Работает педагогом-психологом в детском саду
              </SlideFooterText>
            </SlideFooterColumn>
            <SlideFooterColumn>
              <Icons.small.plus style={{ color: '#4EA9FE' }} />
              <SlideFooterText>
                Закончила Московский городской педагогический университет
              </SlideFooterText>
            </SlideFooterColumn>
          </SlideFooter>
        </Slide>
        <Slide>
          <SlideHead $bgColor="#fffadc" $bgImg={photo3}>
            <SlideImage src={photo3} loading="lazy" />
            <SlideHeadTitle>Анастасия Борисова</SlideHeadTitle>
            <SlideHeadLabel>Преподает 4 года</SlideHeadLabel>
            <SlideBadges>
              <SlideBadge $left={40} $top={200} $rotate={1} $color="#d99a05">
                Занимаюсь хайкингом
              </SlideBadge>
              <SlideBadge $left={20} $top={234} $rotate={-1} $color="#d99a05">
                и преподаю на английском
              </SlideBadge>
            </SlideBadges>
          </SlideHead>
          <SlideFooter>
            <SlideFooterColumn>
              <Icons.small.plus style={{ color: '#d99a05' }} />
              <SlideFooterText>
                Закончила Политехнический университет Петра Великого
                в&nbsp;Санкт-Петербурге
              </SlideFooterText>
            </SlideFooterColumn>
            <SlideFooterColumn>
              <Icons.small.plus style={{ color: '#d99a05' }} />
              <SlideFooterText>Работает в VK</SlideFooterText>
            </SlideFooterColumn>
          </SlideFooter>
        </Slide>
        <Slide>
          <SlideHead $bgColor="#e6ffe2" $bgImg={photo4}>
            <SlideImage src={photo4} loading="lazy" />
            <SlideHeadTitle>Елизавета Рыжова</SlideHeadTitle>
            <SlideHeadLabel>Преподает 5 лет</SlideHeadLabel>
            <SlideBadges>
              <SlideBadge $left={40} $top={200} $rotate={-1} $color="#1acb3f">
                Строю самолеты
              </SlideBadge>
              <SlideBadge $left={80} $top={238} $rotate={3} $color="#1acb3f">
                и путешествую
              </SlideBadge>
            </SlideBadges>
          </SlideHead>
          <SlideFooter>
            <SlideFooterColumn>
              <Icons.small.plus style={{ color: '#1acb3f' }} />
              <SlideFooterText>
                Преподает лекции в&nbsp;Авиационном институте Москвы
              </SlideFooterText>
            </SlideFooterColumn>
            <SlideFooterColumn>
              <Icons.small.plus style={{ color: '#1acb3f' }} />
              <SlideFooterText>
                Выпускница Шанхайского университета транспорта Цзяотун
              </SlideFooterText>
            </SlideFooterColumn>
          </SlideFooter>
        </Slide>
        <Slide>
          <SlideHead $bgColor="#f5e2fe" $bgImg={photo5}>
            <SlideImage src={photo5} loading="lazy" />
            <SlideHeadTitle>Джамиль Мухутдинов</SlideHeadTitle>
            <SlideHeadLabel>Преподает 5 лет</SlideHeadLabel>
            <SlideBadges>
              <SlideBadge $left={40} $top={200} $rotate={-4} $color="#7745c7">
                Геймер
              </SlideBadge>
              <SlideBadge $left={60} $top={238} $rotate={-2} $color="#7745c7">
                и гитарист
              </SlideBadge>
            </SlideBadges>
          </SlideHead>
          <SlideFooter>
            <SlideFooterColumn>
              <Icons.small.plus style={{ color: '#7745c7' }} />
              <SlideFooterText>
                Разрабатывает игры и&nbsp;обучает кодингу в&nbsp;детском лагере
                InnoCamp
              </SlideFooterText>
            </SlideFooterColumn>
            <SlideFooterColumn>
              <Icons.small.plus style={{ color: '#7745c7' }} />
              <SlideFooterText>
                Выпускник университета Иннополис
              </SlideFooterText>
            </SlideFooterColumn>
          </SlideFooter>
        </Slide>
      </Slider>
    </Container>
  );
};

export default Teachers;
