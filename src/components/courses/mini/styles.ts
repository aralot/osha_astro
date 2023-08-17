import styled from 'styled-components';
import { media } from 'components/ui/theme';
import timeIcon from './time.png';
import likeIcon from './like.png';
import commentIcon from './comment.png';

export const Container = styled.div`
  padding-top: 56px;
  margin-bottom: 60px;

  ${media.LARGE_TABLET`
    padding-top: 80px;
    margin-bottom: 97px;
  `}
`;

export const BlockTitle = styled.div`
  margin: 0 20px 36px;

  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: ${({ theme }) => theme.tokens.day.text.primary};

  ${media.LARGE_TABLET`
    margin: 0 0 36px;
    font-size: 46px;
    line-height: 51px;
    letter-spacing: -0.02em;
  `}
`;

export const Grid = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  grid-gap: 18px;
  margin: 0 10px;

  ${media.LARGE_TABLET`
    grid-template-rows: unset;
    margin: unset;
    grid-template-columns: repeat(3, 1fr);
  `}
`;

export const Item = styled.div`
  position: relative;
  padding: 92px 20px 32px;
  border-radius: 16px;
  background: #f5f8fa;

  ${media.LARGE_TABLET`
    padding: 120px 40px 42px;
    border-radius: 24px;
  `}
`;

export const Text = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.tokens.day.text.primary};

  ${media.LARGE_TABLET`
    font-size: 22px;
    line-height: 29px;
  `}
`;

export const TimeIcon = styled.div`
  position: absolute;
  left: 20px;
  top: 24px;
  width: 56px;
  height: 56px;

  background: url('${timeIcon}') no-repeat center;
  background-size: contain;

  ${media.LARGE_TABLET`
     left: 40px;
     top: 32px;
     width: 68px;
     height: 68px;
   `}
`;

export const LikeIcon = styled.div`
  position: absolute;
  left: 10px;
  top: 24px;
  width: 62px;
  height: 62px;

  background: url('${likeIcon}') no-repeat center;
  background-size: contain;

  ${media.LARGE_TABLET`
    left: 24px;
    top: 21px;
    width: 90px;
    height: 89px;
  `}
`;

export const CommentIcon = styled.div`
  position: absolute;
  left: 21px;
  top: 24px;
  width: 58px;
  height: 56px;

  background: url('${commentIcon}') no-repeat center;
  background-size: contain;

  ${media.LARGE_TABLET`
    left: 40px;
    top: 31px;
    width: 72px;
    height: 70px;
   `}
`;
