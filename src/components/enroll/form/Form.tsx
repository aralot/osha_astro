import React, { FunctionComponent, useMemo } from 'react';
import ym from 'react-yandex-metrika';

import { useForm, CALLBACK } from '../../useForm';
import ResultPopup from '../../resultPopup';
import { Input, Tooltip, PhoneInput } from '../../ui-kit';

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

const TIME_ZONE = 'Europe/Moscow';
const LOCALE = 'ru';
const THREE_DAY_MS = 60 * 60 * 24 * 3 * 1000;

const formatDateWithDay = (date: Date) => {
  const formattedDate = new Intl.DateTimeFormat(LOCALE, {
    day: 'numeric',
    month: 'numeric',
    timeZone: TIME_ZONE,
  }).format(date);

  const formattedDay = new Intl.DateTimeFormat(LOCALE, {
    timeZone: TIME_ZONE,
    weekday: 'short',
  }).format(date);

  return `${formattedDate} (${formattedDay.toLowerCase()})`;
};

export const getDateRangeLabel = (date: Date) => {
  const from = formatDateWithDay(date);
  const to = formatDateWithDay(new Date(date.getTime() + THREE_DAY_MS));
  return `${from} - ${to}`;
};

const Form: FunctionComponent = isLight => {
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
  } = useForm({ getDateRangeLabel, isLight });

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

        <Input
          placeholder="Имя родителя"
          value={parentName}
          onChange={e => setParentName(e.target.value)}
          onFocus={() => ym('reachGoal', 'click_parentname')}
          required
        />
        <Input
          placeholder="Имя ребенка"
          value={childFirstName}
          onChange={e => setChildFirstName(e.target.value)}
          required
        />
        <Input
          placeholder="Фамилия ребенка"
          value={childLastName}
          onChange={e => setChildLastName(e.target.value)}
          required
        />
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
            onFocus={() => ym('reachGoal', 'click_birthday')}
          />
        </WithIconCalendar>
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
                    value === CALLBACK
                      ? ''
                      : timeSlots.length
                      ? timeSlots[0].value
                      : '',
                  );
                }}
                onFocus={() => ym('reachGoal', 'click_startdate')}
              />

              <Select
                placeholder="Время курса"
                options={timeSlots}
                value={timeSlotValue}
                isDisabled={!timeSlots.length || dateSlotValue === CALLBACK}
                onChange={value => {
                  setTimeSlotValue(value);
                  if (!value) setDateSlotValue('');
                }}
                onFocus={() => ym('reachGoal', 'click_starttime')}
                isTwoColumn
              />
            </Grid>
          </>
        </Tooltip>
        <PhoneInput
          value={phone}
          onChange={setPhone}
          onFocus={() => ym('reachGoal', 'click_phone')}
          placeholder="+7 (999) 999-99-99"
          label=""
        />
        <Input
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="E-mail"
          required
        />

        <div>
          <Button type="submit" disabled={isPending}>
            Записаться
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