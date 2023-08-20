import React, { FunctionComponent, useEffect, useRef } from 'react';

import { useDetectOutsideClick } from '../../useDetectOutsideClick';

import { BasePopupDesktop } from './BasePopup.desktop';
import {
  Title,
  Popup,
  ContainerDesktopPopup,
  ButtonCloseDesktopPopup,
  HeaderImageContainer,
} from './styles.desktop';
import { IPopupDesktopProps } from './types';

export const PopupDesktop: FunctionComponent<IPopupDesktopProps> = ({
  attachToTop,
  bgColor,
  children,
  headerImage,
  isFullHeight,
  isRtl,
  isVisible,
  onClose,
  title,
  zIndex,
}) => {
  const refPopup = useRef<HTMLDivElement>(null);
  const scrollableContainerRef = useRef<HTMLDivElement>(null);

  const isCloseEnabled = Boolean(onClose);
  const noop = () => {};

  useDetectOutsideClick(
    refPopup,
    onClose || noop,
    isVisible && !isCloseEnabled,
  );

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
          zIndex={zIndex}
          ref={scrollableContainerRef}
        >
          <Popup
            ref={refPopup}
            $transitionStatus={transitionStatus}
            $bgColor={bgColor}
            $withImage={Boolean(headerImage)}
            zIndex={zIndex}
            $isFullHeight={isFullHeight}
            $attachToTop={attachToTop}
          >
            {Boolean(headerImage) && (
              <HeaderImageContainer>{headerImage}</HeaderImageContainer>
            )}

            {Boolean(title) && <Title>{title}</Title>}

            <div>
              {typeof children === 'function'
                ? children(scrollableContainerRef)
                : children}
            </div>
          </Popup>
          {isCloseEnabled && <ButtonCloseDesktopPopup />}
        </ContainerDesktopPopup>
      )}
    </BasePopupDesktop>
  );
};
