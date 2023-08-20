import React, { FunctionComponent } from 'react';

import { PhoneInput, Input } from '../../ui-kit';
import { useForm } from '../../useForm';
import ResultPopup from '../../resultPopup';

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
  } = useForm({});

  return (
    <Wrapper>
      <Input
        placeholder="Имя"
        value={parentName}
        onChange={e => setParentName(e.target.value)}
        required
      />
      <PhoneInput
        value={phone}
        onChange={setPhone}
        placeholder="+7 (999) 999-99-99"
        label=""
      />
      <Input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
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
