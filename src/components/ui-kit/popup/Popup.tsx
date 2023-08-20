import React, { FunctionComponent } from 'react';
import { IPopupProps } from './types';
import { PopupMobile } from './Popup.mobile';
import { PopupDesktop } from './Popup.desktop';

export const Popup: FunctionComponent<IPopupProps> = ({
  desktopAttachToTop,
  ...props
}) => {
  const isMobile = !window.matchMedia('(min-width: 1200px)').matches;

  if (isMobile) {
    return <PopupMobile {...props} />;
  }

  return <PopupDesktop attachToTop={desktopAttachToTop} {...props} />;
};
