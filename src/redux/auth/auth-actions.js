import {createAction} from '@reduxjs/toolkit';

const registerRequest = createAction('auth/registerRequest');
const registerSuccess = createAction('auth/registerSuccess');
const registerError = createAction('auth/registerError');

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginSuccess');
const loginError = createAction('auth/loginError');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutError = createAction('auth/logoutError');

const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
const getCurrentUserError = createAction('auth/getCurrentUserError');

//

const saveUserCredentials = createAction('auth/saveUserCredentials');

const getDailyRateRequest = createAction('auth/getDailyRateRequest');
const getDailyRateSuccess = createAction('auth/getDailyRateSuccess');
const getDailyRateError = createAction('auth/getDailyRateError');

const getDailyRatePrivateRequest = createAction('auth/getDailyRatePrivateRequest');
const getDailyRatePrivateSuccess = createAction('auth/getDailyRatePrivateSuccess');
const getDailyRatePrivateError = createAction('auth/getDailyRatePrivateError');

export default {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  saveUserCredentials,
  getDailyRateRequest,
  getDailyRateSuccess,
  getDailyRateError,
  getDailyRatePrivateRequest,
  getDailyRatePrivateSuccess,
  getDailyRatePrivateError
};
