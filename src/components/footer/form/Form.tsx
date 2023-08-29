import React, { FunctionComponent } from 'react';

import { Input, PhoneInput } from '../../ui-kit';
import { useForm } from '../../useForm';
import ResultPopup from '../../resultPopup';
import { loadReCaptchaSource } from '../../googleReCaptchaWrapper';

import { Wrapper, Button } from './styles';

const Form: FunctionComponent = ({}) => {
  const {
    closePopup,
    email,
    isPending,
    isPopupVisible,
    isSuccess,
    onSubmit,
    parentName,
    phone,
    setEmail,
    setParentName,
    setPhone,
  } = useForm({ isFooter: true });

  return (
    <Wrapper onSubmit={onSubmit}>
      <Input
        placeholder="Имя"
        value={parentName}
        onChange={e => setParentName(e.target.value)}
        onFocus={() => {
          loadReCaptchaSource();
        }}
        required
      />
      <PhoneInput
        value={phone}
        onChange={setPhone}
        onFocus={() => {
          loadReCaptchaSource();
        }}
      />
      <Input
        type="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        onFocus={() => {
          loadReCaptchaSource();
        }}
        placeholder="E-mail"
        required
      />
      <Button type="submit" disabled={isPending}>
        Перезвоните мне
      </Button>
      <ResultPopup
        isSuccess={isSuccess}
        close={closePopup}
        isVisible={isPopupVisible}
      />
    </Wrapper>
  );
};

export default Form;
