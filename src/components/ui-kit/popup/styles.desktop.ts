import styled, { css } from 'styled-components';
import {
  ENTERED,
  ENTERING,
  TransitionStatus,
} from 'react-transition-group/Transition';

import { ZIndex } from '../zIndex';
import { H2 } from '../typography';
import { Colors } from '../colors';
import { Icons } from '../icons';

import {
  POPUP_ANIMATE_ENTERING,
  POPUP_ANIMATE_EXITING,
  POPUP_ANIMATION_TIME_S,
  Backdrop,
} from './styles';

const POPUP_WITH_IMAGE_HORIZONTAL_PADDING_PX = '20px';
export const POPUP_DESKTOP_BORDER_RADIUS_PX = '12px';

const PADDING_SCREEN_VERTICAL = 32;
const OFFSET_SCREEN_TOP = 84 - PADDING_SCREEN_VERTICAL;

export const ContainerDesktopPopup = styled(Backdrop)<{
  $isRtl: boolean;
  zIndex?: number;
}>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: ${PADDING_SCREEN_VERTICAL}px 64px;

  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  overflow-x: hidden;
  overflow-y: scroll;
  z-index: ${({ zIndex }) => zIndex || ZIndex.POPUP};

  ${({ $isRtl }) =>
    $isRtl &&
    css`
      direction: rtl;
    `};
`;

export const Popup = styled.div<{
  $transitionStatus: TransitionStatus;
  $bgColor?: string;
  $withImage?: boolean;
  zIndex?: number;
  $isFullHeight?: boolean;
  $attachToTop?: boolean;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: ${({ $withImage }) =>
    $withImage
      ? `0 ${POPUP_WITH_IMAGE_HORIZONTAL_PADDING_PX} 24px`
      : '28px 28px 32px'};
  width: max-content;

  background: ${({ $bgColor, theme }) => $bgColor || Colors.white};
  box-shadow: 0 20px 28px -8px ${Colors.black_opacity_20};

  ${({ $bgColor }) =>
    $bgColor === 'transparent' &&
    css`
      padding: 0;
      box-shadow: unset;
    `};

  border-radius: ${POPUP_DESKTOP_BORDER_RADIUS_PX};

  z-index: ${({ zIndex }) => zIndex || ZIndex.POPUP};

  ${({ $attachToTop }) => css`
    margin: ${$attachToTop ? `${OFFSET_SCREEN_TOP}px auto auto` : 'auto'};
  `}

  ${({ $isFullHeight }) =>
    $isFullHeight &&
    css`
      min-height: 100%;
    `};

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

export const Title = styled(H2)`
  display: block;
  margin-bottom: 8px;
`;

export const ButtonCloseDesktopPopup = styled(Icons.extraLarge.close)`
  position: fixed;
  top: 20px;
  right: 20px;

  color: ${Colors.white};
  cursor: pointer;
  z-index: ${ZIndex.POPUP};

  ${Popup}:hover + & {
    color: ${Colors.white_opacity_80};
  }
`;

export const HeaderImageContainer = styled.div`
  overflow: hidden;
  margin: 0 -${POPUP_WITH_IMAGE_HORIZONTAL_PADDING_PX} 20px;
  border-radius: ${POPUP_DESKTOP_BORDER_RADIUS_PX}
    ${POPUP_DESKTOP_BORDER_RADIUS_PX} 0 0;
`;
