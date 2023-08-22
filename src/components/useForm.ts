import { FormEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { skipToken } from '@reduxjs/toolkit/query';
import {
  createApi,
  fetchBaseQuery,
  ApiProvider,
} from '@reduxjs/toolkit/query/react';

import { usePopup } from './usePopup';
import { reachGoal } from './yandexMetrikaWrapper';

const BRANCH_CODE = 'OSA-autobooking';
export const BRANCH_CODE_INDONESIA = 'Indonesia-autobooking';
export const CALL_ME = 'callback';

interface IParams {
  branchCode?: string;
  isFooter?: boolean;
  isLight?: boolean;
}

export const TIME_ZONE = 'Europe/Moscow';
export const LOCALE = 'ru';
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

const getDateRangeLabel = (date: Date) => {
  const from = formatDateWithDay(date);
  const to = formatDateWithDay(new Date(date.getTime() + THREE_DAY_MS));
  return `${from} - ${to}`;
};

const getCookieByName = (name: string) => {
  const cookieKeyToValue = document.cookie
    .split(';')
    .map(rawCookie => rawCookie.trim().split('='))
    .find(cookieKeyToValue => cookieKeyToValue[0] === name);
  return cookieKeyToValue && cookieKeyToValue[1];
};

export const api = createApi({
  baseQuery: fetchBaseQuery({
    // @hardcode
    // baseUrl: '/api/v2',
    baseUrl: 'https://temp-try-to-disable-cors.dev.alg.team/api/v2',
  }),
  endpoints: builder => ({
    createOnlineBooking: builder.mutation({
      extraOptions: { maxRetries: 0 },
      query: body => ({
        body,
        method: 'POST',
        url: 'online-booking/create',
      }),
    }),

    getOnlineBookingList: builder.query({
      query: ({ branchCode, childAge, childBirthDate }) => ({
        params: {
          branchCode,
          ...(childAge ? { childAge } : { childBirthDate }),
        },
        url: 'online-booking/list',
      }),
      transformResponse: result => result.data,
    }),
  }),
});

export function useForm({
  branchCode = BRANCH_CODE,
  isFooter = false,
  isLight,
}: IParams) {
  const [parentName, setParentName] = useState('');
  const [childFirstName, setChildFirstName] = useState('');
  const [childLastName, setChildLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [childFavoriteSubject, setChildFavoriteSubject] = useState<
    string | null
  >(null);
  const [hasLaptop, setHasLaptop] = useState<string | null>(null);
  const [childAge, setChildAge] = useState<string | null>(null);
  const [childBirthDate, setChildBirthDate] = useState<string | null>(null);

  const [dateSlotValue, setDateSlotValue] = useState<string>('');

  const [timeSlotValue, setTimeSlotValue] = useState<string>('');

  const {
    data,
    isSuccess: isListLoaded,
    refetch: refetchSlots,
  } = api.useGetOnlineBookingListQuery(
    childAge || childBirthDate
      ? {
          branchCode,
          ...(childAge && { childAge }),
          ...(childBirthDate && { childBirthDate }),
        }
      : skipToken,
  );

  useEffect(() => {
    if (data?.items.length === 1) {
      const startAt = data.items[0].groupStartTime;
      const date = new Date(startAt);
      setDateSlotValue(getDateRangeLabel(date));
      setTimeSlotValue(startAt);
    }
  }, [data?.items, getDateRangeLabel]);

  const groupedSlots = useMemo(() => {
    const slots = new Map<string, string[]>();

    data?.items.forEach(item => {
      const date = new Date(item.groupStartTime);

      const key = getDateRangeLabel(date);

      const dates = slots.get(key);
      if (dates) {
        dates.push(item.groupStartTime);
      } else {
        slots.set(key, [item.groupStartTime]);
      }
    });

    return slots;
  }, [data, getDateRangeLabel]);

  const [createOnlineBookingMutation, { isSuccess }] =
    api.useCreateOnlineBookingMutation();

  const [isPending, setIsPending] = useState(false);

  const { closePopup, isPopupVisible, openPopup } = usePopup();

  useEffect(() => {
    if (window.GRECAPTCHA_TOKEN === undefined) {
      setIsPending(true);
      return;
    }

    setIsPending(false);
  }, [window.GRECAPTCHA_TOKEN]);

  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }

      let isSuccess = false;

      if (window.GRECAPTCHA_TOKEN === undefined) {
        console.error('Captcha script is not loaded yet!');
        return isSuccess;
      }

      setIsPending(true);

      try {
        if (window.GRECAPTCHA_TOKEN) {
          let crmPipeline = 'pipeline__autobooking_mini';
          let crmStatus =
            timeSlotValue && timeSlotValue !== CALL_ME
              ? 'group_sign'
              : 'autobooking_no_time';
          let meta = Object.fromEntries(
            new URLSearchParams(location.search).entries(),
          );
          if (branchCode === BRANCH_CODE_INDONESIA) {
            crmPipeline = 'main__2';
            crmStatus = 'autobooking';
            meta.fpb = getCookieByName('_fbp') || '';
            meta.fbc = getCookieByName('_fbc') || '';
            meta.gclientid = getCookieByName('_ga') || '';
            meta.ym_uid = getCookieByName('_ym_uid') || '';
            meta.referrer = document.referrer;
          }
          const payload: ICreateOnlineBookingParams = {
            branchCode,
            childAge: childAge || undefined,
            childBirthDate: childBirthDate || undefined,
            childFirstName: childFirstName || 'noname',
            childLastName: childLastName || childFirstName || 'noname',
            crmPipeline,
            crmStatus,
            email,
            meta,
            parentName: parentName || 'noname',
            phone,
            reCaptchaToken: GRECAPTCHA_TOKEN,
          };

          if (timeSlotValue && timeSlotValue !== CALL_ME) {
            payload.startTime = timeSlotValue;
          }

          if (childFavoriteSubject) {
            payload.hobby = childFavoriteSubject;
          }

          if (branchCode === BRANCH_CODE_INDONESIA) {
            reachGoal('contact_send_newautobooking');
          } else {
            if (isFooter) {
              reachGoal('submit_footerform');
            } else if (isLight === undefined) {
              reachGoal('submit_headform');
            } else {
              reachGoal(isLight ? 'submit_whiteform' : 'submit_darkform');
            }
            reachGoal('submit_form');
          }

          await createOnlineBookingMutation(payload).unwrap();
          isSuccess = true;
        }
      } catch (e) {
        console.error(e);
        refetchSlots();
        setDateSlotValue('');
        setTimeSlotValue('');
      }
      openPopup();
      setIsPending(false);

      return isSuccess;
    },
    [
      branchCode,
      childAge,
      childBirthDate,
      childFavoriteSubject,
      childFirstName,
      childLastName,
      email,
      isFooter,
      isLight,
      openPopup,
      parentName,
      phone,
      timeSlotValue,
    ],
  );

  return {
    childAge,
    childBirthDate,
    childFavoriteSubject,
    childFirstName,
    childLastName,
    closePopup,
    dateSlotValue,
    email,
    groupedSlots,
    hasLaptop,
    isListLoaded,
    isPending,
    isPopupVisible,
    isSuccess,
    onSubmit,
    parentName,
    phone,
    refetchSlots,
    setChildAge,
    setChildBirthDate,
    setChildFavoriteSubject,
    setChildFirstName,
    setChildLastName,
    setDateSlotValue,
    setEmail,
    setHasLaptop,
    setParentName,
    setPhone,
    setTimeSlotValue,
    timeSlotValue,
  };
}
