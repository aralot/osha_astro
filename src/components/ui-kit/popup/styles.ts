import styled, { css } from 'styled-components';
import {
  TransitionStatus,
  ENTERING,
  ENTERED,
} from 'react-transition-group/Transition';

import { ZIndex } from '../zIndex';
import { Colors } from '../colors';

export const POPUP_ANIMATE_ENTERING = 'cubic-bezier(0.5, 0, 0.7, 1)';
export const POPUP_ANIMATE_EXITING = 'cubic-bezier(0.5, 0, 0.5, 1)';
export const POPUP_ANIMATION_TIME_MS = 300;
export const POPUP_ANIMATION_TIME_S = `${POPUP_ANIMATION_TIME_MS / 1000}s`;

export const Backdrop = styled.div<{
  $transitionStatus: TransitionStatus;
  zIndex?: number;
}>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${Colors.black_opacity_30};
  transition: opacity ${POPUP_ANIMATION_TIME_S};
  z-index: ${({ zIndex }) => zIndex || ZIndex.POPUP};

  ${({ $transitionStatus }) => {
    switch ($transitionStatus) {
      case ENTERING:
      case ENTERED:
        return css`
          opacity: 1;
          transition-timing-function: ${POPUP_ANIMATE_ENTERING};
        `;
      default:
        return css`
          opacity: 0;
          transition-timing-function: ${POPUP_ANIMATE_EXITING};
          pointer-events: none;
        `;
    }
  }}
`;
