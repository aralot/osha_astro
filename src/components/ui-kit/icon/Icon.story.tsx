import React, { FunctionComponent } from 'react';
import { storiesOf } from '@storybook/react';

import Icon from './Icon';
import { Icons } from '../icons';
import { Colors } from '../colors';
import { H1 } from '../typography';

const itemStyle = {
  alignItems: 'center',
  color: 'black',
  display: 'flex',
  height: 80,
  justifyContent: 'center',
  width: 80,
};

type Icons = {
  [key: string]: FunctionComponent | Icons;
};

const GridIcons: FunctionComponent<{ icons: Icons; name?: string }> = ({
  icons,
  name,
}) => {
  const items = Object.entries(icons).filter(
    (item): item is [string, FunctionComponent] =>
      typeof item[1] === 'function',
  );

  const groups = Object.entries(icons).filter(
    (item): item is [string, Icons] => typeof item[1] === 'object',
  );

  return (
    <div style={{ marginBottom: '16px' }}>
      {name ? (
        <H1
          style={{
            borderBottom: `1px solid ${Colors.grey_25}`,
            margin: '16px 0 8px',
          }}
        >
          {name}
        </H1>
      ) : null}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {items.map(([name, icon]) => {
          return (
            <div title={name} key={name}>
              <Icon color={Colors.dark_purple} content={icon} />
            </div>
          );
        })}
      </div>
      {groups.map(([name, icon]) => {
        return <GridIcons key={name} name={name} icons={icon} />;
      })}
    </div>
  );
};

storiesOf('ui-kit/Icon', module)
  .add('small (16x16)', () => {
    return <GridIcons icons={Icons.small} />;
  })
  .add('medium (17x17)', () => {
    return <GridIcons icons={Icons.medium} />;
  })
  .add('large (24x24)', () => {
    return <GridIcons icons={Icons.large} />;
  })
  .add('extraLarge (36x36)', () => {
    return <GridIcons icons={Icons.extraLarge} />;
  })
  .add('lootboxes', () => {
    return <GridIcons icons={Icons.lootboxes} />;
  })
  .add('rotate', () => {
    return (
      <div style={{ display: 'flex' }}>
        <div style={itemStyle}>
          <Icon content={Icons.medium.class} rotate={45} />
        </div>
      </div>
    );
  });
