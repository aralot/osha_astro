import { RefObject, ReactNode } from 'react';
import { TransitionStatus } from 'react-transition-group/Transition';

export interface IBasePopupMobileProps {
  bgColor?: string;
  children(onClose: () => void): JSX.Element;
  isCloseDisabled?: boolean;
  isRtl: boolean;
  isVisible: boolean;
  onClose?(): void;
  zIndex?: number;
  isFullHeight?: boolean;
}

export interface IBasePopupDesktopProps {
  children(
    onClose: () => void,
    transitionStatus: TransitionStatus,
  ): JSX.Element;
  isVisible: boolean;
  onClose?(): void;
  forceMount?: boolean;
}

export interface IPopupProps {
  bgColor?: string;
  isTitleClamped?: boolean;
  isVisible: boolean;
  onClose?(): void;
  title?: ReactNode; // change to Input when search input completed
  isRtl: boolean;
  zIndex?: number;
  isFullHeight?: boolean;
  children?:
    | ReactNode
    | ((scrollableContainerRef: RefObject<HTMLElement>) => ReactNode);
  desktopAttachToTop?: boolean;
  headerImage?: JSX.Element; // TODO temporary solution;
}

export interface IPopupDesktopProps extends IPopupProps {
  headerImage?: JSX.Element; // TODO temporary solution;
  attachToTop?: boolean;
}
