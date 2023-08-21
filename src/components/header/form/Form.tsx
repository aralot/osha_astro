import React, { FunctionComponent } from 'react';

// importing of "PhoneInput" from "ui-kit" produces strange build error:
// > Export "PhoneInput" of module "src/components/ui-kit/phoneInput/PhoneInput.tsx" was reexported through module "src/components/ui-kit/phoneInput/index.ts" while both modules are dependencies of each other and will end up in different chunks by current Rollup settings. This scenario is not well supported at the moment as it will produce a circular dependency between chunks and will likely lead to broken execution order.
// > Either change the import in "src/components/enroll/form/Form.tsx" to point directly to the exporting module or reconfigure "output.manualChunks" to ensure these modules end up in the same chunk.
import { PhoneInput } from '../../ui-kit/phoneInput/PhoneInput';

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
    <Wrapper onSubmit={onSubmit}>
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
