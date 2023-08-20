import styled, { css } from 'styled-components';
import {
  TransitionStatus,
  ENTERING,
  ENTERED,
} from 'react-transition-group/Transition';

import { ZIndex } from '../zIndex';
import { Colors } from '../colors';
import { h2Style } from '../typography';

import {
  POPUP_ANIMATE_ENTERING,
  POPUP_ANIMATE_EXITING,
  POPUP_ANIMATION_TIME_S,
} from './styles';

export const BUTTON_CLOSE_WIDTH_PX = '48px';
export const POPUP_MOBILE_PADDING_TOP = 24;
export const MAX_HEIGHT = `calc(100% - ${POPUP_MOBILE_PADDING_TOP}px)`;

export const Popup = styled.div<{
  $transitionStatus: TransitionStatus;
  $bgColor?: string;
  $isRtl: boolean;
  $isFullHeight?: boolean;
  zIndex?: number;
}>`
  position: fixed;
  left: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: ${MAX_HEIGHT};

  background: ${({ $bgColor }) => $bgColor || Colors.white};
  border-radius: 12px 12px 0 0;

  overflow: hidden;
  z-index: ${({ zIndex }) => zIndex || ZIndex.POPUP};

  ${({ $isRtl }) =>
    $isRtl &&
    css`
      direction: rtl;
    `};

  ${({ $isFullHeight }) =>
    $isFullHeight &&
    css`
      min-height: ${MAX_HEIGHT};
    `};

  ${({ $transitionStatus }) => {
    switch ($transitionStatus) {
      case ENTERING:
      case ENTERED:
        return css`
          transform: translateY(0);
          transition: transform ${POPUP_ANIMATION_TIME_S}
            ${POPUP_ANIMATE_ENTERING};
        `;
      default:
        return css`
          transform: translateY(100%);
          transition: transform ${POPUP_ANIMATION_TIME_S}
            ${POPUP_ANIMATE_EXITING};
        `;
    }
  }}
`;

export const Header = styled.div<{
  $isClosable: boolean;
  $hasHeaderImage: boolean;
}>`
  position: relative;

  ${({ $hasHeaderImage, $isClosable }) => css`
    padding-top: ${$hasHeaderImage ? 16 : 24}px;
    padding-right: ${$isClosable ? BUTTON_CLOSE_WIDTH_PX : '16px'};
    padding-bottom: 0;
    padding-left: 16px;
  `};
`;

export const Title = styled.div<{ $isTitleClamped: boolean }>`
  ${h2Style};

  display: -webkit-box;

  -webkit-box-orient: vertical;
  ${({ $isTitleClamped }) => $isTitleClamped && '-webkit-line-clamp: 2;'}
  overflow: hidden;
`;

export const Content = styled.div`
  position: relative;
  padding: 16px 16px 32px;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
`;

export const ButtonClose = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: ${BUTTON_CLOSE_WIDTH_PX};
  height: 54px;
  padding: 28px 0 0 8px;
  cursor: pointer;
  z-index: 1;
`;
