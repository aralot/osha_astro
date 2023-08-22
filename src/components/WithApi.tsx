import React, { FunctionComponent } from 'react';

import { ApiProvider } from '@reduxjs/toolkit/query/react';

import { api } from './useForm';

const WithApi: FunctionComponent = ({ children }) => {
  return <ApiProvider api={api}>{children}</ApiProvider>;
};

export default WithApi;
