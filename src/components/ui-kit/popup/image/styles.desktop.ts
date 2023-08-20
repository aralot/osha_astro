import styled, { css } from 'styled-components';
import {
  ENTERED,
  ENTERING,
  TransitionStatus,
} from 'react-transition-group/Transition';

import {
  POPUP_ANIMATE_ENTERING,
  POPUP_ANIMATE_EXITING,
  POPUP_ANIMATION_TIME_S,
} from '../styles';
import { POPUP_DESKTOP_BORDER_RADIUS_PX } from '../styles.desktop';
import { ZIndex } from '../../zIndex';

export const Image = styled.img<{ $transitionStatus: TransitionStatus }>`
  display: flex;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;

  box-shadow: 0 20px 28px -8px ${({ theme }) => theme.palette.black_opacity_20};
  border-radius: ${POPUP_DESKTOP_BORDER_RADIUS_PX};

  z-index: ${ZIndex.POPUP};

  ${({ $transitionStatus }) => {
    switch ($transitionStatus) {
      case ENTERING:
      case ENTERED:
        return css`
          opacity: 1;
          transform: translateY(0);
          transition: all ${POPUP_ANIMATION_TIME_S} ${POPUP_ANIMATE_ENTERING};
        `;
      default:
        return css`
          opacity: 0;
          transform: translateY(100px);
          transition: all ${POPUP_ANIMATION_TIME_S} ${POPUP_ANIMATE_EXITING};
        `;
    }
  }}
`;
