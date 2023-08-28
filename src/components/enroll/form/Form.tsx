import React, { FunctionComponent, useMemo, useState } from 'react';

import { useForm, LOCALE, TIME_ZONE, CALL_ME } from '../../useForm';
import { reachGoal } from '../../yandexMetrikaWrapper';
import ResultPopup from '../../resultPopup';
import { Input, Tooltip } from '../../ui-kit';
import { loadReCaptchaSource } from '../../googleReCaptchaWrapper';

// importing of "PhoneInput" from "ui-kit" produces strange build error:
// > Export "PhoneInput" of module "src/components/ui-kit/phoneInput/PhoneInput.tsx" was reexported through module "src/components/ui-kit/phoneInput/index.ts" while both modules are dependencies of each other and will end up in different chunks by current Rollup settings. This scenario is not well supported at the moment as it will produce a circular dependency between chunks and will likely lead to broken execution order.
// > Either change the import in "src/components/enroll/form/Form.tsx" to point directly to the exporting module or reconfigure "output.manualChunks" to ensure these modules end up in the same chunk.
import { PhoneInput } from '../../ui-kit/phoneInput/PhoneInput';

import {
  Agreement,
  Button,
  Grid,
  Instruction,
  Item,
  StaticTooltip,
  StyledForm,
  WithIconCalendar,
} from './styles';
import Select from './select';

const Form: FunctionComponent = ({ isLight }) => {
  // @hardcode
  const isSafari = false;
  const isDesktop = false;

  const {
    childBirthDate,
    childFirstName,
    childLastName,
    closePopup,
    dateSlotValue,
    email,
    groupedSlots,
    isPending,
    isPopupVisible,
    isSuccess,
    onSubmit,
    parentName,
    phone,
    setChildBirthDate,
    setChildFirstName,
    setChildLastName,
    setDateSlotValue,
    setEmail,
    setParentName,
    setPhone,
    setTimeSlotValue,
    timeSlotValue,
  } = useForm({ isLight: Boolean(isLight) });

  const dateSlots = useMemo(() => {
    return [
      ...Array.from(groupedSlots.keys()).map(value => ({
        label: value,
        value,
      })),
    ];
  }, [groupedSlots]);

  const timeSlots = useMemo(() => {
    if (!dateSlotValue) return [];

    return (groupedSlots.get(dateSlotValue) || []).map(value => ({
      label: `${new Intl.DateTimeFormat(LOCALE, {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: TIME_ZONE,
      }).format(new Date(value))} (мск)`,
      value: value,
    }));
  }, [groupedSlots, dateSlotValue]);

  const [isCallMeSelected, setIsCallMeSelected] = useState(false);

  return (
    <>
      <StyledForm onSubmit={onSubmit}>
        <Instruction>
          <Item>Введите дату рождения ребенка</Item>
          <Item>
            Заполните имя родителя, а также фамилию и&nbsp;имя ребенка{' '}
          </Item>
          <Item>
            Из выпадающего списка выберите удобную для вас дату и время начала
            мини-курса
          </Item>
          <Item>Нажмите на кнопку “Записаться”</Item>
          <Item>
            В течение 10 минут на WhatsApp вам поступит сообщение с информацией
            о записи
          </Item>
        </Instruction>

        <WithIconCalendar
          $isEmpty={!childBirthDate}
          $isSafariDesktop={isSafari && isDesktop}
        >
          <Input
            type="date"
            placeholder="Дата рождения ребенка"
            required
            value={childBirthDate || ''}
            min="1990-01-01"
            max="2100-12-31"
            onChange={e => {
              setDateSlotValue('');
              setTimeSlotValue('');
              setChildBirthDate(e.target.value);
            }}
            onFocus={() => {
              loadReCaptchaSource();
              reachGoal('click_birthday');
            }}
          />
        </WithIconCalendar>
        <Input
          placeholder="Имя родителя"
          value={parentName}
          onChange={e => setParentName(e.target.value)}
          onFocus={() => {
            loadReCaptchaSource();
            reachGoal('click_parentname');
          }}
          required
        />
        <Input
          placeholder="Имя ребенка"
          value={childFirstName}
          onFocus={() => {
            loadReCaptchaSource();
          }}
          onChange={e => setChildFirstName(e.target.value)}
          required
        />
        <Input
          placeholder="Фамилия ребенка"
          value={childLastName}
          onFocus={() => {
            loadReCaptchaSource();
          }}
          onChange={e => setChildLastName(e.target.value)}
          required
        />
        <Tooltip
          content="Введите дату рождения, чтобы увидеть доступные варианты"
          placement="top"
          isDisabled={Boolean(childBirthDate)}
        >
          <>
            <StaticTooltip $isVisible={!childBirthDate} $isLight={isLight}>
              Сначала введите дату рождения
            </StaticTooltip>
            <Grid>
              <Select
                placeholder="Дата старта"
                options={dateSlots}
                value={dateSlotValue}
                isDisabled={!childBirthDate}
                onChange={value => {
                  setDateSlotValue(value);
                  setTimeSlotValue(
                    value === CALL_ME
                      ? ''
                      : timeSlots.length
                      ? timeSlots[0].value
                      : '',
                  );
                  setIsCallMeSelected(value === CALL_ME);
                }}
                onFocus={() => reachGoal('click_startdate')}
              />

              <Select
                placeholder="Время курса"
                options={timeSlots}
                value={timeSlotValue}
                isDisabled={!timeSlots.length || dateSlotValue === CALL_ME}
                onChange={value => {
                  setTimeSlotValue(value);
                  if (!value) setDateSlotValue('');
                  setIsCallMeSelected(value === CALL_ME);
                }}
                onFocus={() => reachGoal('click_starttime')}
                isTwoColumn
              />
            </Grid>
          </>
        </Tooltip>
        <PhoneInput
          value={phone}
          onChange={setPhone}
          onFocus={() => {
            loadReCaptchaSource();
            reachGoal('click_phone');
          }}
          placeholder="+7 (999) 999-99-99"
          label=""
        />
        <Input
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="E-mail"
          onFocus={() => {
            loadReCaptchaSource();
          }}
          required
        />

        <div>
          <Button type="submit" disabled={isPending}>
            {isCallMeSelected ? 'Заказать обратный звонок' : 'Записаться'}
          </Button>
          <Agreement $isLight={isLight}>
            Продолжая, я соглашаюсь с положением{' '}
            <a href="https://algoritmika.org/ru/privacy" target="_blank">
              о защите персональных данных
            </a>{' '}
            и отправкой мне SMS и E-mail сообщений
          </Agreement>
        </div>
      </StyledForm>

      <ResultPopup
        isSuccess={isSuccess}
        close={closePopup}
        isVisible={isPopupVisible}
      />
    </>
  );
};

export default Form;
