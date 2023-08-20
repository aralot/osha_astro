import React, { FunctionComponent, useEffect, useRef } from 'react';

import { useDetectOutsideClick } from '../../../useDetectOutsideClick';

import { BasePopupDesktop } from '../BasePopup.desktop';
import {
  ContainerDesktopPopup,
  ButtonCloseDesktopPopup,
} from '../styles.desktop';
import { Image } from './styles.desktop';
import { IPopupImageDesktopProps } from './types';

export const PopupImageDesktop: FunctionComponent<IPopupImageDesktopProps> = ({
  imageUrl,
  isRtl,
  isVisible,
  onClose,
}) => {
  const refImage = useRef<HTMLImageElement>(null);

  useDetectOutsideClick(refImage, onClose, !isVisible);

  useEffect(() => {
    if (!onClose || !isVisible) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code?.toLowerCase() === 'escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible, onClose]);

  return (
    <BasePopupDesktop isVisible={isVisible} onClose={onClose}>
      {(onClose, transitionStatus) => (
        <ContainerDesktopPopup
          $isRtl={isRtl}
          $transitionStatus={transitionStatus}
        >
          <Image
            ref={refImage}
            $transitionStatus={transitionStatus}
            src={imageUrl}
          />
          <ButtonCloseDesktopPopup />
        </ContainerDesktopPopup>
      )}
    </BasePopupDesktop>
  );
};
