import React, { FunctionComponent } from 'react';

import { PhoneInput } from '../../ui-kit';
import { useForm } from '../../useForm';
import ResultPopup from '../../resultPopup';

import { Wrapper, Button } from './styles';

const Form: FunctionComponent = ({}) => {
  const {
    closePopup,
    isPending,
    isPopupVisible,
    isSuccess,
    onSubmit,
    phone,
    setPhone,
  } = useForm({});

  return (
    <Wrapper>
      <PhoneInput
        value={phone}
        onChange={setPhone}
        placeholder="+7 (999) 999-99-99"
        label=""
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
