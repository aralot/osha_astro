import styled, { css } from 'styled-components';

import { Tokens } from '../../../ui-kit';

export const Container = styled.div`
  position: relative;
  padding-bottom: 100%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 24px;
  overflow: hidden;
`;

export const Image = styled.div<{
  $isCurrent: boolean;
  $src: string;
}>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0;
  transition: all 0.3s ease-out;
  background: url('${({ $src }) => $src}') no-repeat center;
  background-size: cover;

  ${({ $isCurrent }) =>
    $isCurrent &&
    css`
      transition: all 0.3s ease-in;
      opacity: 1;
      z-index: 1;
    `}
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;

  background: #ffffff;
  border: none;
  border-radius: 8px;
  color: ${Tokens.day.text.primary};
  cursor: pointer;
  outline: none;
  z-index: 2;

  &:hover {
    color: ${Tokens.day.interactive.primaryHover};
  }

  svg {
    width: 16px;
    height: 16px;
  }

  @media (min-width: 1200px) {
    width: 48px;
    height: 48px;
    border-radius: 12px;

    svg {
      width: 36px;
      height: 36px;
    }
  }
`;

export const ButtonLeft = styled(Button)`
  left: 16px;
`;

export const ButtonRight = styled(Button)`
  right: 16px;
`;
