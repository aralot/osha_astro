import React, { FunctionComponent, useCallback } from 'react';

import { Input } from '../input';

import { IPhoneInputProps } from './types';

const MIN_NUMBER_COUNT = 9;
const ERROR_MESSAGE = `Номер телефона должен содержать минимум ${MIN_NUMBER_COUNT} цифр`;

const onInputDefault = (event: React.ChangeEvent<HTMLInputElement>) => {
  const input = event.target;
  const numberCount = input.value.replace(/\D+/g, '').length;
  if (numberCount < MIN_NUMBER_COUNT) {
    input.setCustomValidity(ERROR_MESSAGE);
  } else {
    input.setCustomValidity('');
  }
};

export const PhoneInput: FunctionComponent<IPhoneInputProps> = ({
  onChange,
  onInput = onInputDefault,
  ...inputProps
}) => {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    },
    [onChange],
  );

  return (
    <Input
      label="Номер телефона"
      name="phone"
      onInput={onInput}
      required
      type="tel"
      onChange={handleChange}
      {...inputProps}
    />
  );
};
