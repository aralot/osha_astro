import React from 'react';

/**
 * @deprecated
 */
export enum IconSize {
  XL = 'extraLarge',
  L = 'large',
  M = 'medium',
  S = 'small',
  LEGACY_SMALL = 'legacy_small',
}

/**
 * @deprecated
 */
export const Sizes = {
  [IconSize.S]: '16px',
  [IconSize.LEGACY_SMALL]: '22px',
  [IconSize.M]: '17px',
  [IconSize.L]: '24px',
  [IconSize.XL]: '36px',
};

interface ISize {
  width: number;
  height: number;
}

export interface IIconProps {
  className?: string;
  color?: string;
  content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  qaAttribute?: string;
  size?: IconSize | ISize;
  rotate?: number;
  onClick?<T>(event: React.MouseEvent<T>): void;
}
