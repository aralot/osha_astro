import React from 'react';

import WithApi from '../../WithApi';

import Form from './Form';

export default ({ isLight }) => {
  return (
    <WithApi>
      <Form isLight={isLight} />
    </WithApi>
  );
};
