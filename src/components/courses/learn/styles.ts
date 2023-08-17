import styled from 'styled-components';

import { media } from 'components/ui/theme';

import scratch from './scratch.svg';
import roblox from './roblox.svg';
import blogging from './blogging.svg';
import python from './python.png';
import frontend from './frontend.png';
import unity from './unity.svg';
import design from './design.svg';

export const Container = styled.div`
  padding: 40px 20px 75px;
  background: #f5f8fa;

  ${media.LARGE_TABLET`
    padding: 68px 40px 85px 60px;
    margin-bottom: 100px;
    border-radius: 32px;
  `}
`;

export const Head = styled.div`
  ${media.LARGE_TABLET`
    display: grid;
    grid-template-columns: 546px 419px;
    grid-column-gap: 64px;
    margin-bottom: 70px;
  `}
`;

export const Title = styled.div`
  margin-bottom: 24px;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: ${({ theme }) => theme.tokens.day.text.primary};

  ${media.LARGE_TABLET`
    margin-bottom: unset;
    font-size: 46px;
    line-height: 51px;
    letter-spacing: -0.02em;
  `}
`;

export const Description = styled.div`
  margin-bottom: 40px;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.tokens.day.text.primary};
  max-width: 370px;

  ${media.LARGE_TABLET`
    margin-bottom: unset;
    padding-top: 14px;
    line-height: 21px;
    letter-spacing: -0.01em;
  `}
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & ~ & {
    margin-top: 20px;
  }

  ${media.LARGE_TABLET`
    flex-direction: unset;
    gap: 16px;

    & ~ & {
      margin-top: 42px;
    }
  `};
`;

const ContinueLearnCourse = styled.div`
  position: relative;
  font-size: 18px;
  line-height: 29px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.tokens.day.text.primary};
  border-radius: 12px;

  &:before {
    content: '';
    position: absolute;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  ${media.LARGE_TABLET`
    font-size: 22px;
    line-height: 36px;
  `}
`;

export const Scratch = styled(ContinueLearnCourse)`
  padding: 7px 30px 7px 78px;
  background: #daf0fe;
  margin-right: auto;

  &:before {
    top: -14px;
    left: 9px;
    width: 63px;
    height: 59px;
    background-image: url('${scratch}');
  }

  ${media.LARGE_TABLET`
    padding: 7px 30px 7px 98px;
    margin-right: unset;

    &:before {
      top: -17px;
      left: 10px;
      width: 79px;
      height: 74px;
    }
  `}
`;

export const Roblox = styled(ContinueLearnCourse)`
  padding: 6px 85px 6px 17px;
  background: #f5e2fe;
  margin-left: auto;

  &:before {
    top: -12px;
    right: 12px;
    width: 43px;
    height: 62px;
    background-image: url('${roblox}');
    transform: scaleX(-1);
  }

  ${media.LARGE_TABLET`
    padding: 7px 51px 7px 83px;
    margin-left: unset;

    &:before {
      top: -15px;
      left: 19px;
      right: unset;
      width: 55px;
      height: 78px;
      transform: unset;
    }
  `}
`;

export const Python = styled(ContinueLearnCourse)`
  padding: 6px 32px 6px 93px;
  background: #d0fed0;
  margin-right: auto;

  &:before {
    top: -12px;
    left: 12px;
    width: 72px;
    height: 65px;
    background-image: url('${python}');
  }

  ${media.LARGE_TABLET`
    padding: 7px 35px 7px 117px;
    margin-right: unset;

    &:before {
      top: -16px;
      left: 12px;
      width: 101px;
      height: 83px;
    }
  `}
`;

export const Blogging = styled(ContinueLearnCourse)`
  padding: 6px 90px 6px 16px;
  background: #ffdefd;
  margin-left: auto;

  &:before {
    top: -17px;
    right: 9px;
    width: 53px;
    height: 66px;
    background-image: url('${blogging}');
    transform: scaleX(-1);
  }

  ${media.LARGE_TABLET`
    padding: 7px 43px 7px 93px;
    margin-left: unset;

    &:before {
      top: -22px;
      left: 19px;
      right: unset;
      width: 66px;
      height: 83px;
      transform: unset;
    }
  `}
`;

export const Frontend = styled(ContinueLearnCourse)`
  padding: 6px 25px 6px 74px;
  background: #feeac5;
  margin-right: auto;

  &:before {
    top: -7px;
    left: 9px;
    width: 60px;
    height: 57px;
    background-image: url('${frontend}');
  }

  ${media.LARGE_TABLET`
    padding: 7px 35px 7px 93px;
    margin-right: unset;

    &:before {
      top: -9px;
      left: 11px;
      width: 78px;
      height: 73px;
    }
  `}
`;

export const Unity = styled(ContinueLearnCourse)`
  padding: 6px 108px 6px 16px;
  background: #ffe3e5;
  margin-left: auto;

  &:before {
    top: -9px;
    right: 12px;
    width: 77px;
    height: 66px;
    background-image: url('${unity}');
  }

  ${media.LARGE_TABLET`
    padding: 7px 40px 7px 119px;
    margin-left: unset;

    &:before {
      top: -12px;
      left: 15px;
      right: unset;
      width: 97px;
      height: 83px;
      background-image: url('${unity}');
    }
  `}
`;

export const Design = styled(ContinueLearnCourse)`
  padding: 6px 26px 6px 78px;
  background: #fef29e;
  margin-right: auto;

  &:before {
    top: -20px;
    left: 5px;
    width: 67px;
    height: 74px;
    background-image: url('${design}');
  }

  ${media.LARGE_TABLET`
    padding: 7px 34px 7px 98px;
    margin-right: unset;

    &:before {
      top: -26px;
      left: 6px;
      width: 84px;
      height: 92px;
    }
  `}
`;
