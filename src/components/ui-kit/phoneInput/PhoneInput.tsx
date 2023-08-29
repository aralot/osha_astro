import React, { FunctionComponent, useRef, useEffect } from 'react';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

import { Input } from '../input';

import './styles.css';

export const PhoneInput: FunctionComponent = () => {
  const phoneInputRef = useRef(null);

  useEffect(() => {
    if (!phoneInputRef.current) return;

    intlTelInput(phoneInputRef.current, {
      utilsScript: '/utils.js',
      initialCountry: 'ru',
      preferredCountries: [],
    });
  }, []);

  return (
    <Input
      inputRef={phoneInputRef}
      autocomplete="on"
      type="tel"
      name="phone"
      required
    />
  );
};
