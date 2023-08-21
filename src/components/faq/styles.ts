import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-bottom: 48px;

  @media (min-width: 1200px) {
    margin-bottom: 100px;
  }
`;

export const Title = styled.div`
  margin: 0 10px 30px;

  font-weight: 700;
  font-size: 24px;
  line-height: 30px;

  @media (min-width: 1200px) {
    margin: 0 0 44px;

    font-size: 46px;
    line-height: 51px;
    letter-spacing: -0.02em;
  }
`;

export const Item = styled.div`
  margin: 0 10px;

  border-top: 2px solid #f5f8fa;
  overflow: hidden;

  &:last-child {
    border-bottom: 2px solid #f5f8fa;
  }

  @media (min-width: 1200px) {
    margin-bottom: 2px;
    background: #f5f8fa;
    border: unset;
  }
`;

export const Head = styled.div<{ $isOpened: boolean }>`
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  padding: 28px 0;

  font-size: 14px;
  line-height: 18px;

  cursor: pointer;
  user-select: none;

  @media (min-width: 1200px) {
    padding: 32px 32px 32px 50px;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
  }

  ${({ $isOpened }) =>
    $isOpened &&
    css`
      padding: 28px 0 0;

      @media (min-width: 1200px) {
        padding-bottom: 12px;
      }
    `}
`;

export const Content = styled.div`
  padding: 0 0 28px;
  margin-top: 12px;
  font-size: 14px;
  line-height: 16px;

  @media (min-width: 1200px) {
    padding: 0 32px 32px 50px;
    font-size: 18px;
    line-height: 22px;
  }
`;
