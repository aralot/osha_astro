import React, { FunctionComponent } from 'react';

import { Input } from '../../ui-kit';
import { useForm } from '../../useForm';
import ResultPopup from '../../resultPopup';
import { loadReCaptchaSource } from '../../googleReCaptchaWrapper';

// importing of "PhoneInput" from "ui-kit" produces strange build error:
// > Export "PhoneInput" of module "src/components/ui-kit/phoneInput/PhoneInput.tsx" was reexported through module "src/components/ui-kit/phoneInput/index.ts" while both modules are dependencies of each other and will end up in different chunks by current Rollup settings. This scenario is not well supported at the moment as it will produce a circular dependency between chunks and will likely lead to broken execution order.
// > Either change the import in "src/components/enroll/form/Form.tsx" to point directly to the exporting module or reconfigure "output.manualChunks" to ensure these modules end up in the same chunk.
import { PhoneInput } from '../../ui-kit/phoneInput/PhoneInput';

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
        placeholder="+7 (999) 999-99-99"
        label=""
      />
      <Input
        type="email"
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
