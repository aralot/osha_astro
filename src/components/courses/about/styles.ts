import styled from 'styled-components';
import { media } from 'components/ui/theme';
import hero1 from './hero1.svg';
import hero2 from './hero2.svg';
import hero3 from './hero3.svg';

export const Courses = styled.div`
  padding: 48px 20px 60px;
  background: #f8f2ff;

  ${media.LARGE_TABLET`
    border-radius: 32px;
    padding: 71px 58px 94px;
  `}
`;

export const Title = styled.div`
  margin-bottom: 16px;

  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: ${({ theme }) => theme.tokens.day.text.primary};

  ${media.LARGE_TABLET`
    margin-bottom: 24px;

    font-size: 46px;
    line-height: 51px;
    letter-spacing: -0.02em;
  `}
`;

export const Description = styled.div`
  max-width: 246px;
  margin-bottom: 32px;

  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.tokens.day.text.primary};

  ${media.LARGE_TABLET`
    max-width: unset;
    margin-bottom: 44px;
    font-size: 22px;
    line-height: 29px;
    letter-spacing: -0.01em;
  `}
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  overflow-x: scroll;
  width: calc(100% + 40px);
  margin: 0 -20px 32px;
  padding: 0 20px;

  &::-webkit-scrollbar {
    height: 0;
  }

  ${media.LARGE_TABLET`
    width: unset;
    overflow-x: unset;
    grid-column-gap: 20px;
    margin: 0 0 40px;
    padding: unset;
  `}
`;

export const Age = styled.div`
  margin-bottom: 8px;

  font-size: 13px;
  font-weight: bold;
  line-height: 16px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.tokens.day.text.primary};

  ${media.LARGE_TABLET`
    font-size: 14px;
    line-height: 18px;
  `}
`;

export const CourseTitle = styled.div`
  margin-bottom: 16px;

  font-weight: 700;
  font-size: 18px;
  line-height: 24px;

  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.tokens.day.text.primary};

  ${media.LARGE_TABLET`
    font-size: 22px;
    line-height: 29px;
  `}
`;

export const Points = styled.div`
  display: grid;
  grid-row-gap: 12px;
`;

export const Point = styled.div`
  display: grid;
  grid-template-columns: 16px auto;
  grid-column-gap: 8px;

  font-size: 15px;
  line-height: 19px;
  letter-spacing: -0.01em;

  color: ${({ theme }) => theme.tokens.day.text.primary};

  svg {
    margin-top: 2px;
  }

  ${media.LARGE_TABLET`
    font-size: 16px;
    line-height: 21px;
  `}
`;

export const Course = styled.div`
  height: 430px;
  width: 253px;
  padding: 24px 20px;

  background: #ffffff;
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: contain;
  border-radius: 24px;

  &:nth-of-type(1) {
    background-image: url('${hero1}');

    ${Point} > svg {
      color: #4ea9fe;
    }
  }

  &:nth-of-type(2) {
    background-image: url('${hero2}');

    ${Point} > svg {
      color: #833ae0;
    }
  }

  &:nth-of-type(3) {
    background-image: url('${hero3}');

    ${Point} > svg {
      color: #2cbb45;
    }
  }

  ${media.LARGE_TABLET`
    width: unset;
    height: 482px;
    padding: 32px;
  `}
`;

export const Button = styled.a`
  display: block;
  padding: 12px 0;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  background: #2cbb45;
  border-radius: 12px;
  cursor: pointer;
  outline: none;
`;
