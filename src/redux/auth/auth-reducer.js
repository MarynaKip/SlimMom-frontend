import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth-actions';

const initialUserState = {
  token: null,
  _id: null,
  email: null,
  name: null,
  // dailyMeal: null,
  // credentials: null
};

const user = createReducer({}, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: (_, __) => initialUserState,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
  //
  [authActions.getDailyRateSuccess]: (state, { payload }) => ({...state, ...payload.dailyMeal}),
  [authActions.getDailyRatePrivateSuccess]: (_, { payload }) =>
    payload.current,
  [authActions.saveUserCredentials]: (state, { payload }) => ({...state, ...payload})
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.user.token,
  [authActions.logoutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;
const error = createReducer(null, {
  [authActions.registerError]: setError,
  [authActions.loginError]: setError,
  [authActions.logoutError]: setError,
  [authActions.getCurrentUserError]: setError,
  //
  [authActions.getDailyRateError]: setError,
  [authActions.getDailyRatePrivateError]: setError,
});

const isAuthenticated = createReducer(false, {
  [authActions.registerSuccess]: () => true,
  [authActions.loginSuccess]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.logoutSuccess]: () => false,
  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.getCurrentUserError]: () => false,
});

const loading = createReducer(false, {
  [authActions.registerRequest]: () => true,
  [authActions.registerSuccess]: () => false,
  [authActions.registerError]: () => false,
  [authActions.loginRequest]: () => true,
  [authActions.loginSuccess]: () => false,
  [authActions.loginError]: () => false,
  [authActions.logoutRequest]: () => true,
  [authActions.logoutSuccess]: () => false,
  [authActions.logoutError]: () => false,
  //
  [authActions.getDailyRateRequest]: () => true,
  [authActions.getDailyRateSuccess]: () => false,
  [authActions.getDailyRateError]: () => false,
  [authActions.getDailyRatePrivateRequest]: () => true,
  [authActions.getDailyRatePrivateSuccess]: () => false,
  [authActions.getDailyRatePrivateError]: () => false,
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
  error,
  loading,
});
