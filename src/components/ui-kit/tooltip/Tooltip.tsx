import React, { cloneElement, FunctionComponent, useState } from 'react';
import {
  useFloating,
  useInteractions,
  useHover,
  shift,
  autoUpdate,
  flip,
  offset as offsetMiddleware,
  FloatingPortal,
  useMergeRefs,
} from '@floating-ui/react';

import { ITooltipProps } from './types';
import { Container } from './styles';

export const Tooltip: FunctionComponent<ITooltipProps> = ({
  children,
  content,
  delay = 400,
  isDisabled,
  isOpened: isOpenedByParent,
  offset = 4,
  placement = 'bottom',
}) => {
  const [isOpenedByHover, setIsOpenedByHover] = useState(false);
  const isOpened = isDisabled ? false : isOpenedByParent ?? isOpenedByHover;

  const { context, floating, reference, strategy, x, y } = useFloating({
    middleware: [offsetMiddleware(offset), flip(), shift()],
    onOpenChange: setIsOpenedByHover,
    open: isOpened,
    placement,
    whileElementsMounted: autoUpdate,
  });

  const { getFloatingProps, getReferenceProps } = useInteractions([
    useHover(context, {
      delay: {
        close: 100,
        open: delay,
      },
      enabled: isOpenedByParent === undefined,
    }),
  ]);

  const ref = useMergeRefs([reference, (children as any).ref]);

  return (
    <>
      {cloneElement(children, getReferenceProps({ ref, ...children.props }))}

      <FloatingPortal root={document.body}>
        {isOpened && (
          <Container
            ref={floating}
            style={{
              left: x ?? 0,
              position: strategy,
              top: y ?? 0,
            }}
            {...getFloatingProps()}
          >
            {content}
          </Container>
        )}
      </FloatingPortal>
    </>
  );
};
