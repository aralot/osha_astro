import React from 'react';

import Providers from '../../Providers';

import Form from './Form';

export default ({ isLight }) => {
  return (
    <Providers>
      <Form isLight={isLight} />
    </Providers>
  );
};
