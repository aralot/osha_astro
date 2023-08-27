import styled, { css } from 'styled-components';

import { Tokens } from '../ui-kit';

export const Container = styled.div`
  margin-bottom: 54px;

  @media (min-width: 1200px) {
    margin-bottom: 100px;
  }
`;

export const Head = styled.div`
  margin: 0 20px 40px;

  @media (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 44px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;

  @media (min-width: 1200px) {
    max-width: 698px;
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

export const Slider = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  padding: 0 10px;
  scroll-padding: 0 10px;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    height: 0;
  }

  @media (min-width: 1200px) {
    gap: 24px;
    padding: unset;
    scroll-padding: unset;
  }
`;

const SLIDE_HEIGHT = 438;
const SLIDE_HEIGHT_HEAD = 307;
const SLIDE_HEIGHT_FOOTER = SLIDE_HEIGHT - SLIDE_HEIGHT_HEAD;
const SLIDE_HEIGHT_MOBILE = 485;
const SLIDE_HEIGHT_HEAD_MOBILE = 298;
const SLIDE_HEIGHT_FOOTER_MOBILE =
  SLIDE_HEIGHT_MOBILE - SLIDE_HEIGHT_HEAD_MOBILE;

export const Slide = styled.div`
  width: 280px;
  height: ${SLIDE_HEIGHT_MOBILE}px;
  flex-shrink: 0;
  scroll-snap-align: start;
  overflow: hidden;

  @media (min-width: 1200px) {
    width: 568px;
    height: ${SLIDE_HEIGHT}px;
  }
`;

export const SlideHead = styled.div<{ $bgColor: string }>`
  position: relative;
  height: ${SLIDE_HEIGHT_HEAD_MOBILE}px;
  padding: 24px 20px 0;

  border-radius: 16px 16px 0 0;

  ${({ $bgColor }) => css`
    background-color: ${$bgColor};
  `};

  @media (min-width: 1200px) {
    height: ${SLIDE_HEIGHT_HEAD}px;
    padding: 32px 0 0 42px;

    border-radius: 20px 20px 0 0;
    background-position: right bottom;
  }
`;

export const SlideImage = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  object-fit: contain;
  right: -50px;

  @media (min-width: 1200px) {
    height: 100%;
    right: -104px;
  }
`;

export const SlideHeadTitle = styled.div`
  margin-bottom: 4px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;

  @media (min-width: 1200px) {
    font-size: 28px;
    line-height: 34px;
    letter-spacing: -0.02em;
    white-space: break-spaces;
  }
`;

export const SlideHeadLabel = styled.div`
  font-size: 14px;
  line-height: 18px;

  @media (min-width: 1200px) {
    font-size: 16px;
    line-height: 27px;
    letter-spacing: -0.01em;
  }
`;

export const SlideBadges = styled.div`
  transform: scale(0.7) translateX(-40%) translateY(20px);

  @media (min-width: 1200px) {
    transform: unset;
  }
`;

export const SlideBadge = styled.div<{
  $rotate: number;
  $top: number;
  $left: number;
  $color: string;
}>`
  position: absolute;
  padding: 8px 27px 8px 14px;

  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: -0.02em;
  background: #ffffff;
  border-radius: 10px;
  white-space: nowrap;

  ${({ $color, $left, $rotate, $top }) => css`
    left: ${$left}px;
    top: ${$top}px;
    transform: rotate(${$rotate}deg);
    color: ${$color};
  `}

  &:first-child:before {
    position: absolute;
    left: -14px;
    top: 50%;
    transform: translateY(-50%);
    content: '«';
    font-weight: 400;
    font-size: 50px;
    line-height: 61px;
    letter-spacing: -0.02em;
  }

  &:last-child:after {
    position: absolute;
    right: -14px;
    top: 50%;
    transform: translateY(-50%);
    content: '»';
    font-weight: 400;
    font-size: 50px;
    line-height: 61px;
    letter-spacing: -0.02em;
  }
`;

export const SlideFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 18px 20px 0;
  height: ${SLIDE_HEIGHT_FOOTER_MOBILE}px;
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-top: none;
  border-radius: 0 0 16px 16px;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    grid-column-gap: 15px;
    padding: 30px 32px 0;
    height: ${SLIDE_HEIGHT_FOOTER}px;
    border-radius: 0 0 24px 24px;
  }
`;

export const SlideFooterColumn = styled.div`
  display: grid;
  grid-template-columns: 16px auto;
  grid-column-gap: 12px;
`;

export const SlideFooterText = styled.div`
  margin-top: -2px;
  font-size: 16px;
  line-height: 20px;

  @media (min-width: 1200px) {
    line-height: 21px;
    letter-spacing: -0.01em;
  }
`;
