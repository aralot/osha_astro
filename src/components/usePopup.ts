import { useState, useCallback } from 'react';

export function usePopup() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const openPopup = useCallback(() => {
    setIsPopupVisible(true);
  }, []);

  const closePopup = useCallback(() => {
    setIsPopupVisible(false);
  }, []);

  const togglePopup = useCallback(() => {
    setIsPopupVisible(isPopupVisible => !isPopupVisible);
  }, []);

  return {
    closePopup,
    isPopupVisible,
    openPopup,
    togglePopup,
  };
}
