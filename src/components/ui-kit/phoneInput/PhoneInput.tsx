import React, {
  FunctionComponent,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

import { Input } from '../input';

import './styles.css';
import { IPhoneInputProps } from './types';

export const PhoneInput: FunctionComponent<IPhoneInputProps> = ({
  onChange,
  onInput,
  value: initialValue,
  ...inputProps
}) => {
  const phoneInputRef = useRef(null);
  const itiRef = useRef(null);

  const handleInput = useCallback(event => {
    if (!itiRef.current) return;

    const input = event.target;
    const iti = itiRef.current;

    if (iti.isPossibleNumber()) {
      input.setCustomValidity('');
    } else {
      let error = '';
      switch (iti.getValidationError()) {
        case 2:
          error = 'Слишком короткий номер телефона';
          break;
        case 3:
          error = 'Слишком длинный номер телефона';
          break;

        default:
          error = 'Неправильный номер телефона';
      }
      input.setCustomValidity(error);
    }
  }, []);

  useEffect(() => {
    if (!phoneInputRef.current) return;

    itiRef.current = intlTelInput(phoneInputRef.current, {
      utilsScript: '/utils.js',
      initialCountry: 'ru',
      preferredCountries: ['ru'],
    });

    phoneInputRef.current.addEventListener('countrychange', event => {
      handleInput(event);
    });
  }, []);

  useEffect(() => {
    if (!phoneInputRef.current) return;

    // reset
    if (initialValue === '') {
      phoneInputRef.current.value = '';
    }
  }, [phoneInputRef.current, initialValue]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!itiRef.current) return;

      onChange(itiRef.current.getNumber());
    },
    [onChange],
  );

  return (
    <Input
      autoComplete="on"
      inputRef={phoneInputRef}
      name="phone"
      onChange={handleChange}
      onInput={handleInput}
      required
      type="tel"
    />
  );
};
