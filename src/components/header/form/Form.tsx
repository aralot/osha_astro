import React, { FunctionComponent } from 'react';

import { PhoneInput } from '../../ui-kit';
import { useForm } from '../../useForm';
import ResultPopup from '../../resultPopup';
import { loadReCaptchaSource } from '../../googleReCaptchaWrapper';

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
    <Wrapper onSubmit={onSubmit}>
      <PhoneInput
        value={phone}
        onChange={setPhone}
        onFocus={() => {
          loadReCaptchaSource();
        }}
      />
      <Button type="submit" disabled={isPending}>
        Перезвоните мне
      </Button>
      <ResultPopup
        close={closePopup}
        isLoading={isPending}
        isSuccess={isSuccess}
        isVisible={isPopupVisible}
      />
    </Wrapper>
  );
};

export default Form;
