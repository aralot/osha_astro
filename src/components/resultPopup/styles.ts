import styled, { css } from 'styled-components';

import { H4, Tokens } from '../ui-kit';

export const Content = styled.div`
  max-width: 415px;
  width: 100%;
  padding: 4px 20px 8px;
  text-align: center;
`;

export const IconBox = styled.div<{ $isSuccess: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 12px;
  width: 42px;
  height: 42px;
  border-radius: 50%;

  ${({ $isSuccess}) => {
    const color = $isSuccess
      ? Tokens.day.interactive.success
      : Tokens.day.interactive.error;

    return css`
      color: ${color};
      border: 1px solid ${color};
    `;
  }};
`;

export const Title = styled(H4)`
  max-width: 221px;
  margin: 0 auto 8px;
`;
