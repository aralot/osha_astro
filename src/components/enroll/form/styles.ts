import styled, { css } from 'styled-components';

import { P2Short, p3Style, Colors, Tokens } from '../../ui-kit';

import calendar from './calendar.svg';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  z-index: 1;

  @media (min-width: 1200px) {
    width: 370px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 12px;
`;

export const WithIconCalendar = styled.div<{
  $isEmpty: boolean;
  $isSafariDesktop: boolean;
}>`
  position: relative;
  width: 100%;

  &:before {
    content: '';
    position: absolute;
    right: 13px;
    top: 9px;
    width: 18px;
    height: 18px;
    background: url('${calendar}') no-repeat center;
    background-size: 18px 18px;
    pointer-events: none;
  }

  input {
    display: flex !important;
    // fix color in safari
    color: black;
    appearance: none;

    &::-webkit-inner-spin-button,
    &::-webkit-calendar-picker-indicator {
      position: absolute;
      right: 11px;
      top: 7px;
      width: 18px;
      height: 18px;
      background: url('${calendar}') no-repeat center;
      background-size: 18px 18px;
      cursor: pointer;
    }

    ${({ $isEmpty, $isSafariDesktop}) =>
      !$isSafariDesktop &&
      css`
        &::before {
          content: attr(placeholder);
          width: 100%;
          cursor: text;
          color: ${Tokens.day.text.disabled};
          white-space: nowrap;

          ${!$isEmpty &&
          css`
            display: none;
          `}
        }
      `}

    &:focus::before,
    &:valid::before {
      display: none;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 48px;
  margin-top: 8px;
  margin-bottom: 8px;

  font-size: 18px;
  line-height: 24px;
  color: white;
  background: #2cbb45;
  border: none;
  border-radius: 12px;
  outline: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    pointer-events: none;
  }
`;

export const Agreement = styled.div<{ $isLight: boolean }>`
  font-size: 14px;
  line-height: 18px;

  a {
    text-decoration: underline;

  }

  ${({ $isLight }) =>
    $isLight
      ? css`
          color: #0f1c2c;

          a {
            color: #0f1c2c;
          }
        `
      : css`
          color: white;

          a {
            color: white;
          }
        `}};
`;

export const Description = styled(P2Short)`
  position: relative;
  margin-bottom: 24px;
  color: white;
  z-index: 1;
`;

export const StaticTooltip = styled.div<{
  $isVisible: boolean;
  $isLight: boolean;
}>`
  color: ${({ $isLight }) =>
    $isLight
      ? Tokens.day.text.secondary
      : Tokens.day.text.buttonPrimary};
  font-size: 12px;
  line-height: 18px;
  display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
  margin-bottom: -14px;
`;

export const Instruction = styled.ul`
  background-color: white;
  border-radius: 10px;
  padding: 14px 12px 12px 32px;
  margin: 0 0 8px 0;
  border: 1px solid ${Colors.divider_and_input_border};

  @media (min-width: 1200px) {
    padding: 16px 16px 16px 38px;
    margin: 0 0 16px 0;
  }
`;

export const Item = styled.li`
  ${p3Style}
`;
