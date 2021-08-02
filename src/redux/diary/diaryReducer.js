import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './diaryActions';
const {
  addProductRequest,
  addProductSuccess,
  addProductError,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,
  fetchHistoryRequest,
  fetchHistorySuccess,
  fetchHistoryError,
} = actions;



const initialDiaryState = {
  currentProducts: [],
};

const initialHistoryState = {
  date: '1970-01-01',
  itemsHistory: [],
};

const today = new Date().toLocaleDateString().split('.').reverse().join('-');

const currentProducts = createReducer(initialDiaryState.currentProducts, {
  [fetchHistorySuccess]: (state, { payload }) => {
    const date = payload.date;
    if (today === date) {
      return [...payload.data.data];
    }
  },
  [addProductSuccess]: (state, { payload }) => [...state, payload.data],
  [deleteProductSuccess]: (state, { payload }) => {
    const newState = state.filter(({ productName }) => productName !== payload);
    return [...newState];
  },
});

const history = createReducer(initialHistoryState, {
  [fetchHistorySuccess]: (state, { payload }) => {
    const date = payload.date;
    // Калькулятор работает от хистори даты - календарь записывает свое значение в хистори
    // значит и мепать список надо по хистори - выбирать карент список не надо
    // карент только для сайдбара - чтобы не менялся при смене истории а дату сайдбар может брать текущую
    // из Date() (now) - по логике первый фетч идет на сервер за текущей датой
    // а значит в карент дату с первого раза попадут текущие продукты
    // if (today !== date) {
    //   const itemsHistory = payload.data.data;
    //   return { date, itemsHistory };
    // }
    const itemsHistory = payload.data.data;
    return { date, itemsHistory };
  },
});

export default combineReducers({
  // date,
  currentProducts,
  history,
});
