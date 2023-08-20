import { styled } from 'styled-components';

import { Tokens, p2ShortStyle } from '../../ui-kit';

export const Wrapper = styled.form`
  grid-column: 1 / -1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-shrink: 0;
  padding: 40px 25px 60px;

  @media (min-width: 1200px) {
    order: unset;
    width: 260px;
    margin-right: 100px;
    padding: unset;
  }
`;

export const Button = styled.button`
  margin-top: 8px;
  padding: 8px 0;

  background: #2cbb45;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: white;
  cursor: pointer;
  outline: none;

  &:disabled {
    opacity: 0.7;
    pointer-events: none;
  }
`;
