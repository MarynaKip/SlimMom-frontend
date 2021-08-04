import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import calculatorActions from './calculator-actions';

const initialUserState = {
  height: '', // рост
  age: '', // возвраст
  currentWeight: '', // текущий вес
  desiredWeight: '', // желаемый вес
  bloodType: '', // группа крови}
};

const userInfo = createReducer(initialUserState, {
  [calculatorActions.saveUserCredentials]: (_, { payload }) => payload,
});

const dailyMeal = createReducer(null, {
  [calculatorActions.getDailyRateSuccess]: (_, { payload }) =>
    payload.dailyMeal,
  [calculatorActions.getDailyRatePrivateSuccess]: (_, { payload }) =>
    payload.user,
});

const setError = (_, { payload }) => payload;
const error = createReducer(null, {
  [calculatorActions.getDailyRateError]: setError,
  [calculatorActions.getDailyRatePrivateError]: setError,
});

const loading = createReducer(false, {
  [calculatorActions.getDailyRateRequest]: () => true,
  [calculatorActions.getDailyRateSuccess]: () => false,
  [calculatorActions.getDailyRateError]: () => false,
  [calculatorActions.getDailyRatePrivateRequest]: () => true,
  [calculatorActions.getDailyRatePrivateSuccess]: () => false,
  [calculatorActions.getDailyRatePrivateError]: () => false,
});

export default combineReducers({
  userInfo,
  dailyMeal,
  error,
  loading,
});
