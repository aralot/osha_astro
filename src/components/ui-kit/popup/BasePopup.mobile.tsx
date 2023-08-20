import React, {
  FunctionComponent,
  useCallback,
  useState,
  useEffect,
} from 'react';
import { createPortal } from 'react-dom';
import { Transition } from 'react-transition-group';

import { Popup } from './styles.mobile';
import { Backdrop, POPUP_ANIMATION_TIME_MS } from './styles';

import { IBasePopupMobileProps } from './types';

export const BasePopupMobile: FunctionComponent<IBasePopupMobileProps> = ({
  bgColor,
  children,
  isCloseDisabled,
  isFullHeight,
  isRtl,
  isVisible,
  onClose,
  zIndex,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnExited = useCallback(() => {
    if (isVisible && onClose) onClose();
    setIsOpen(false);
  }, [isVisible, onClose]);

  const handleClose = useCallback(() => {
    if (!onClose || isCloseDisabled) return;
    setIsOpen(false);
  }, [isCloseDisabled, onClose]);

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        setIsOpen(isVisible);
      }, 50);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isVisible]);

  if (!isVisible && !isOpen) return null;

  return createPortal(
    <Transition
      timeout={POPUP_ANIMATION_TIME_MS}
      in={isOpen && isVisible}
      onExited={handleOnExited}
    >
      {transitionStatus => (
        <>
          <Backdrop
            $transitionStatus={transitionStatus}
            onClick={handleClose}
            zIndex={zIndex}
          />
          <Popup
            $transitionStatus={transitionStatus}
            $bgColor={bgColor}
            $isRtl={isRtl}
            $isFullHeight={isFullHeight}
            zIndex={zIndex}
          >
            {children(handleClose)}
          </Popup>
        </>
      )}
    </Transition>,
    document.body,
  );
};
