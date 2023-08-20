import styled from 'styled-components';

import { P3 } from '../typography';
import { ZIndex } from '../zIndex';
import {Tokens} from '../tokens';

export const Container = styled(P3)`
  padding: 5px 12px;

  color: ${Tokens.day.text.buttonPrimary};
  background-color: ${Tokens.day.interactive.tooltip};
  border: 1px solid ${Tokens.night.border.default};
  border-radius: 8px;

  z-index: ${ZIndex.TOOLTIP};
`;
