import { createAction } from '@reduxjs/toolkit';

const saveUserCredentials = createAction('calculator/saveUserCredentials');

const getDailyRateRequest = createAction('calculator/getDailyRateRequest');
const getDailyRateSuccess = createAction('calculator/getDailyRateSuccess');
const getDailyRateError = createAction('calculator/getDailyRateError');

const getDailyRatePrivateRequest = createAction('calculator/getDailyRatePrivateRequest');
const getDailyRatePrivateSuccess = createAction('calculator/getDailyRatePrivateSuccess');
const getDailyRatePrivateError = createAction('calculator/getDailyRatePrivateError');

export default {
  saveUserCredentials,
  getDailyRateRequest,
  getDailyRateSuccess,
  getDailyRateError,
  getDailyRatePrivateRequest,
  getDailyRatePrivateSuccess,
  getDailyRatePrivateError,
};
