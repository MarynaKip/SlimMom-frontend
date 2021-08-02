import { createAction } from '@reduxjs/toolkit';

const getDailyRateRequest = createAction('auth/getDailyRateRequest');
const getDailyRateSuccess = createAction('auth/getDailyRateSuccess');
const getDailyRateError = createAction('auth/getDailyRateError');

const getDailyRatePrivateRequest = createAction('auth/getDailyRatePrivateRequest');
const getDailyRatePrivateSuccess = createAction('auth/getDailyRatePrivateSuccess');
const getDailyRatePrivateError = createAction('auth/getDailyRatePrivateError');

export default {
  getDailyRateRequest,
  getDailyRateSuccess,
  getDailyRateError,
  getDailyRatePrivateRequest,
  getDailyRatePrivateSuccess,
  getDailyRatePrivateError,
};
