import { useEffect, RefObject } from 'react';

const DATA_ATTRIBUTE_DETECT_OUTSIDE_CLICK_DISABLED =
  'detectOutsideClickDisabled';

type Callback = ((event?: any) => void) | (() => void);

const findDataAttributeForIgnoreClick = (element: HTMLElement) => {
  let parent: HTMLElement | null = element;

  while (parent) {
    if (parent.dataset[DATA_ATTRIBUTE_DETECT_OUTSIDE_CLICK_DISABLED]) {
      return true;
    }

    parent = parent.parentElement;
  }

  return false;
};

export const useDetectOutsideClick = (
  ref: RefObject<Element>,
  callback: Callback,
  isDisabled = false,
) => {
  useEffect(() => {
    if (isDisabled) return;

    const handleClickOutside = (event: any) => {
      if (
        ref.current &&
        !findDataAttributeForIgnoreClick(event.target) &&
        !(ref.current.contains(event.target) || ref.current === event.target)
      ) {
        callback(event);
      }
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [isDisabled, callback, ref, ref.current]);
};
