import React, { FunctionComponent, useState } from 'react';

import { Icons } from '../ui-kit';

import { IExpandItemProps } from './types';
import { Content, Head, Item } from './styles';

export const ExpandItem: FunctionComponent<IExpandItemProps> = ({
  text,
  title,
}) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Item>
      <Head $isOpened={isOpened} onClick={() => setIsOpened(value => !value)}>
        <div>{title}</div>
        <div>
          {isOpened ? <Icons.large.arrowUp2 /> : <Icons.large.arrowDown2 />}
        </div>
      </Head>
      {isOpened && <Content>{text}</Content>}
    </Item>
  );
};
