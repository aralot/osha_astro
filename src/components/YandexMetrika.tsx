import React, { FunctionComponent } from 'react';
import { YMInitializer } from 'react-yandex-metrika';

const YandexMetrika: FunctionComponent = () => {
  return (
    <YMInitializer
      accounts={[93302549]}
      options={{
        accurateTrackBounce: true,
        clickmap: true,
        trackLinks: true,
        webvisor: true,
      }}
      version="2"
    />
  );
};

export default YandexMetrika;
