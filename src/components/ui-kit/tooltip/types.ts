import { ReactElement, ReactNode } from 'react';
import { Placement } from '@floating-ui/dom';

export interface ITooltipProps {
  children: ReactElement;
  content: ReactNode;
  delay?: number;
  isDisabled?: boolean;
  isOpened?: boolean;
  offset?: number;
  placement?: Placement;
}
