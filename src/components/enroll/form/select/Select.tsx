import React, { FunctionComponent, useCallback, useState } from 'react';

import { ISelectProps } from './types';
import {
  Arrow,
  Container,
  NotFound,
  Option,
  Options,
  Popup,
  Value,
  FakeSelect,
} from './styles';
import {
  autoUpdate,
  flip,
  shift,
  useFloating,
  offset,
  useInteractions,
  useClick,
  useDismiss,
  FloatingPortal,
} from '@floating-ui/react';

import { CALL_ME } from '../../../useForm';

const Select: FunctionComponent<ISelectProps> = ({
  isDisabled,
  isTwoColumn = false,
  onChange,
  onFocus,
  options,
  placeholder,
  value,
}) => {
  const selectedOption = options.find(option => option.value === value);

  const [isOpened, setIsOpened] = useState(false);

  const { context, floating, reference, strategy, x, y } = useFloating({
    middleware: [offset(4), flip(), shift()],
    onOpenChange: state => {
      setIsOpened(state);
      if (state) onFocus();
    },
    open: isOpened,
    whileElementsMounted: autoUpdate,
  });

  const { getFloatingProps, getReferenceProps } = useInteractions([
    useClick(context),
    useDismiss(context, {
      escapeKey: false,
    }),
  ]);

  const select = useCallback(
    (value: string) => {
      onChange(value);
      setIsOpened(false);
    },
    [onChange],
  );

  const getValue = () => {
    if (!isOpened && selectedOption?.label) {
      return selectedOption.label;
    }

    if (value === CALL_ME) return 'Перезвоните';
    return placeholder;
  };

  return (
    <>
      <Container
        ref={reference}
        {...getReferenceProps()}
        $isDisabled={isDisabled}
      >
        <Value $isDisabled={isDisabled}>{getValue()}</Value>
        <Arrow $isOpened={isOpened} $isDisabled={isDisabled} />
        {!value && !isDisabled && (
          <FakeSelect
            key={isOpened ? 'opened' : 'closed' /* hide error after open*/}
            required
            onFocus={e => {
              e.target.blur();
            }}
          >
            <option value=""></option>
          </FakeSelect>
        )}
      </Container>
      <FloatingPortal root={document.body}>
        {isOpened && (
          <Popup
            ref={floating}
            style={{
              left: x ?? 0,
              position: strategy,
              top: y ?? 0,
            }}
            {...getFloatingProps()}
          >
            {options.length > 0 && (
              <Options $isTwoColumn={isTwoColumn}>
                {options.map(option => (
                  <Option
                    key={option.label}
                    onClick={() => select(option.value)}
                  >
                    {option.label}
                  </Option>
                ))}
              </Options>
            )}
            <NotFound onClick={() => select(CALL_ME)}>
              Дата не подходит, перезвоните мне
            </NotFound>
          </Popup>
        )}
      </FloatingPortal>
    </>
  );
};

export default Select;
