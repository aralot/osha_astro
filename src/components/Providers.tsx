import React, { FunctionComponent } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import { ApiProvider } from '@reduxjs/toolkit/query/react';

import YandexMetrika from './YandexMetrika';
import { api } from './useForm';

const Providers: FunctionComponent = ({ children }) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LdK_RclAAAAADApWB10Y1ClEYT6KEL0XkCLNZRv">
      <ApiProvider api={api}>
        {children}

        <YandexMetrika />
      </ApiProvider>
    </GoogleReCaptchaProvider>
  );
};

export default Providers;
