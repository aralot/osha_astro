import styled, { css } from 'styled-components';

import { P2Short, Tokens, Icons } from '../../../ui-kit';

export const Container = styled.div<{ $isDisabled: boolean }>`
  position: relative;
  display: flex;
  padding: 8px 38px 8px 12px;
  height: 36px;
  max-width: 100%;
  min-width: 0;
  border: 1px solid ${Tokens.day.border.default};
  background: #ffffff;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    border-color: ${Tokens.day.interactive.primaryHover};
  }

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      pointer-events: none;
      opacity: 0.8;
    `}
`;

export const Value = styled(P2Short)<{ $isDisabled: boolean }>`
  display: block;
  overflow: hidden;
  user-select: none;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      color: ${Tokens.day.text.disabled};
    `};
`;

export const Arrow = styled(Icons.small.arrowDown)<{
  $isOpened: boolean;
  $isDisabled: boolean;
}>`
  position: absolute;
  right: 12px;
  top: 10px;
  transition: all 0.3s;
  transform: rotate(0);

  ${({ $isDisabled }) => css`
    color: ${$isDisabled
      ? Tokens.day.text.disabled
      : Tokens.day.text.secondary};
  `}

  ${({ $isOpened }) =>
    $isOpened &&
    css`
      transform: rotate(-180deg);
    `}
`;

export const Popup = styled.div`
  padding: 6px 12px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 24px -8px rgba(0, 0, 0, 0.44);
  z-index: 1;
`;

export const Options = styled.div<{ $isTwoColumn: boolean }>`
  display: grid;
  border-bottom: 1px solid ${Tokens.day.border.default};
  margin-bottom: 6px;

  ${({ $isTwoColumn }) => css`
    grid-template-columns: ${$isTwoColumn ? '1fr 1fr' : '1fr'};
  `}
`;

export const Option = styled(P2Short)`
  padding: 6px 0;

  cursor: pointer;
  white-space: nowrap;

  &:hover {
    color: ${Tokens.day.interactive.primaryHover};
  }
`;

export const NotFound = styled(Option)`
  padding: 6px 0;
`;

export const FakeSelect = styled.select`
  position: absolute;
  left: 32px;
  right: 0;
  top: 0;
  bottom: 0;
  outline: none;
  appearance: none;
  pointer-events: none;
  background: transparent;
  border: none;
`;
