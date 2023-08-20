import React, { FunctionComponent, SVGProps } from 'react';

import { IIconProps, Sizes } from './types';

const Icon: FunctionComponent<IIconProps> = ({
  className,
  color,
  content: Icon,
  onClick,
  qaAttribute,
  rotate,
  size,
}) => {
  const props: SVGProps<SVGSVGElement> = {};

  if (typeof size === 'object') {
    props.height = `${size.height}px`;
    props.width = `${size.width}px`;
  } else if (size) {
    props.height = Sizes[size];
    props.width = Sizes[size];
  }

  if (!props.style) props.style = {};

  if (rotate) props.style.transform = `rotate(${rotate}deg)`;
  if (color) props.style.color = color;

  return (
    <Icon
      {...props}
      data-qa-id={qaAttribute}
      className={className}
      onClick={onClick}
    />
  );
};

export default Icon;
