import React, { FunctionComponent } from 'react';
import { IPopupProps } from './types';
import { PopupMobile } from './Popup.mobile';
import { PopupDesktop } from './Popup.desktop';

export const Popup: FunctionComponent<IPopupProps> = ({
  desktopAttachToTop,
  ...props
}) => {
  // @hardcode
  // const { isMobile } = useMediaQuery();
  const isMobile = false;

  if (isMobile) {
    return <PopupMobile {...props} />;
  }

  return <PopupDesktop attachToTop={desktopAttachToTop} {...props} />;
};
