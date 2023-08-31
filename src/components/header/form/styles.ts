import { styled } from 'styled-components';

import { Tokens, p2ShortStyle } from '../../ui-kit';

export const Wrapper = styled.form`
  display: none;

  @media (min-width: 1200px) {
    display: flex;
    gap: 12px;
    padding-top: 20px;
    height: 56px;
  }
`;

export const Button = styled.button`
  ${p2ShortStyle};

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 37px;

  background: white;
  border: none;
  border-radius: 10px;
  color: ${Tokens.day.interactive.primary};
  cursor: pointer;
  outline: none;

  text-wrap: nowrap;

  &:hover {
    color: ${Tokens.day.interactive.primaryHover};
  }

  &:disabled {
    opacity: 0.7;
    pointer-events: none;
  }
`;
