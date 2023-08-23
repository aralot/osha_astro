import styled, { css } from 'styled-components';

import { Tokens, Icons } from '../ui-kit';

import { starIcon } from './starIcon';

export const Container = styled.div`
  margin-bottom: 60px;

  @media (min-width: 1200px) {
    margin-bottom: 100px;
  }
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px 40px;

  @media (min-width: 1200px) {
    margin: 0 0 44px;
  }
`;

export const Title = styled.div`
  font-weight: 700;

  font-size: 24px;
  line-height: 30px;

  @media (min-width: 1200px) {
    max-width: 742px;
    font-size: 46px;
    line-height: 51px;
    letter-spacing: -0.02em;
  }
`;

export const Buttons = styled.div`
  display: none;
  grid-template-columns: 48px 48px;
  grid-column-gap: 12px;
  height: 48px;
  margin-top: auto;

  @media (min-width: 1200px) {
    display: grid;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(15, 28, 44, 0.07);
  border-radius: 12px;
  cursor: pointer;

  svg {
    width: 36px;
    height: 36px;
    color: ${Tokens.day.text.primary};
  }
`;

export const Emoji = styled(Icons.extraLarge.emojis.heart)`
  display: inline;
  vertical-align: middle;
  width: 32px;
  height: 32px;
  transform: rotate(13.59deg);

  @media (min-width: 1200px) {
    width: 60px;
    height: 60px;
  }
`;

export const Slider = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  padding: 0 10px;
  scroll-padding: 0 10px;

  &::-webkit-scrollbar {
    height: 0;
  }

  @media (min-width: 1200px) {
    gap: 24px;
    padding: unset;
    scroll-padding: unset;
  }
`;

export const Slide = styled.div`
  position: relative;
  width: 272px;
  height: 400px;
  flex-shrink: 0;
  border-radius: 24px;
  scroll-snap-align: start;
  cursor: pointer;
`;

export const SlideImage = styled.img`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  object-fit: cover;
  border-radius: 24px;
`;

export const Stars = styled.div`
  position: absolute;
  top: 18px;
  right: 14px;
  display: grid;
  grid-template-columns: repeat(5, 18px);
  grid-column-gap: 5px;
`;

export const Star = styled(starIcon)<{ $isActive: boolean }>`
  ${({ $isActive }) =>
    $isActive &&
    css`
      fill: white;
    `}
`;

export const SlideViewFull = styled.div`
  position: absolute;
  left: 24px;
  bottom: 32px;

  display: grid;
  grid-template-columns: min-content 16px;
  grid-column-gap: 4px;
  align-items: center;

  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.01em;
  white-space: nowrap;
  color: #ffffff;
`;

export const Content = styled.div`
  position: absolute;
  left: 24px;
  bottom: 70px;

  color: #ffffff;
`;

export const ContentText = styled.div`
  position: relative;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;

  &:before {
    position: absolute;
    left: -14px;
    content: '«';
  }

  &:after {
    content: '»';
  }
`;

export const AuthorName = styled.div`
  margin-bottom: 4px;

  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.01em;

  &:after {
    content: ':';
  }
`;

export const PopupContent = styled.div`
  max-width: 500px;
`;
