import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import calculatorActions from './calculator-actions';

// const initialValues = {
//     height: '', // рост
//     age: '', // возвраст
//     currentWeight: '', // текущий вес
//     desiredWeight: '', // желаемый вес
//     bloodType: '', // группа крови}
// };

// const userInfo = createReducer(initialValues, {
//     [calculatorActions.registerSuccess]: (_, { payload }) => payload.user,
//     [calculatorActions.loginSuccess]: (_, { payload }) => payload.user,
//     [calculatorActions.logoutSuccess]: (_, __) => initialUserState,
//     [calculatorActions.getCurrentUserSuccess]: (_, { payload }) => payload,
// });


const dailyMeal = createReducer(null, {
  [calculatorActions.getDailyRateSuccess]: (_, { payload }) => payload,
  [calculatorActions.getDailyRatePrivateSuccess]: (_, { payload }) => payload,
});

const setError = (_, { payload }) => payload;
const error = createReducer(null, {
  [calculatorActions.getDailyRateError]: setError,
  [calculatorActions.getDailyRatePrivateError]: setError,
});

export default combineReducers({
  dailyMeal,
  error
});