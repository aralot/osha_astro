import React, { FunctionComponent, useEffect } from 'react';

import { P3, Popup, Icons, preloader } from '../ui-kit';

import { Content, IconBox, Title } from './styles';
import { IResultPopupProps } from './types';

export const ResultPopup: FunctionComponent<IResultPopupProps> = ({
  close,
  isSuccess,
  isVisible,
}) => {
  let Icon = Icons.large.close;
  let title = 'Ой! Что-то пошло не так.';
  let description = 'Попробуйте отправить заявку еще раз';

  if (isSuccess) {
    Icon = Icons.large.ok;
    title = 'Спасибо! Данные успешно отправлены.';
    description =
      'В течение 10 минут на WhatsApp вам поступит сообщение с информацией о записи ';
  }

  if (isLoading) {
    Icon = Icons.large.ok;
    title = 'Спасибо! Данные успешно отправлены.';
    description =
      'В течение 10 минут на WhatsApp вам поступит сообщение с информацией о записи ';
  }

  const Icon = isSuccess ? Icons.large.ok : Icons.large.close;

  // @hardcode
  isVisible = true;

  return (
    <Popup isVisible={isVisible} onClose={close} isRtl={false}>
      <Content>
        <IconBox $isSuccess={isSuccess}>
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
            : 'Попробуйте отправить заявку еще раз'}
        </P3>
      </Content>
    </Popup>
  );
};
