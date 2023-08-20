import React, {
  FunctionComponent,
  useCallback,
  useState,
  useEffect,
} from 'react';
import { createPortal } from 'react-dom';
import { Transition } from 'react-transition-group';
import { POPUP_ANIMATION_TIME_MS } from './styles';
import { IBasePopupDesktopProps } from './types';

export const BasePopupDesktop: FunctionComponent<IBasePopupDesktopProps> = ({
  children,
  forceMount,
  isVisible,
  onClose,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnExited = useCallback(() => {
    if (isVisible && onClose) onClose();
    setIsOpen(false);
  }, [isVisible, onClose]);

  const handleClose = useCallback(() => {
    if (!onClose) return;
    setIsOpen(false);
  }, [onClose]);

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

  if (!isVisible && !isOpen && !forceMount) return null;

  return createPortal(
    <Transition
      timeout={POPUP_ANIMATION_TIME_MS}
      in={isOpen && isVisible}
      onExited={handleOnExited}
    >
      {transitionStatus => <>{children(handleClose, transitionStatus)}</>}
    </Transition>,
    document.body,
  );
};
