import React, { FunctionComponent, useEffect } from 'react';

import { P3, Popup, Icons } from '../ui-kit';

// import ok from '../../icons/ok.svg';
// import close from '../../icons/close.svg';

import { Content, IconBox, Title } from './styles';
import { IResultPopupProps } from './types';

export const ResultPopup: FunctionComponent<IResultPopupProps> = ({
  close,
  isSuccess,
  isVisible,
}) => {
  const Icon = isSuccess ? Icons.large.ok : Icons.large.close;
  // const icon = isSuccess ? ok : close;

  return (
    <Popup isVisible={isVisible} onClose={close} isRtl={false}>
      <Content>
        <IconBox $isSuccess={isSuccess}>
          {/* <img src={icon} /> */}
          <Icon />
        </IconBox>
        <Title>
          {isSuccess
            ? 'Спасибо! Данные успешно отправлены.'
            : 'Ой! Что-то пошло не так.'}
        </Title>
        <P3>
          {isSuccess
            ? 'В течение 10 минут на WhatsApp вам поступит сообщение с информацией о записи '
            : 'Попробуйте отправить заявку еще раз  '}
        </P3>
      </Content>
    </Popup>
  );
};
