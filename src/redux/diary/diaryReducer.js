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
  productSearchRequest,
  productSearchSuccess,
  productSearchError,
  fetchHistoryRequest,
  fetchHistorySuccess,
  fetchHistoryError,
} = actions;

// const initialDateState = new Date()
//   .toLocaleDateString()
//   .split('.')
//   .reverse()
//   .join('-');

const initialDiaryState = {
  currentProducts: [],
};

const initialHistoryState = {
  date: '',
  itemsHistory: [],
};

const today = new Date().toLocaleDateString().split('.').reverse().join('-');

const currentProducts = createReducer(initialDiaryState.currentProducts, {
  [actions.fetchHistorySuccess]: (state, { payload }) => {
    const date = payload.date;
    if (today === date) {
      return [...payload.data.data];
    }
  },
  [actions.addProductSuccess]: (state, { payload }) => [payload.data, ...state],
  [actions.deleteProductSuccess]: (state, { payload }) => {
    const newState = state.filter(({ productName }) => productName !== payload);
    return [...newState];
  },
});

const history = createReducer(initialHistoryState, {
  [actions.fetchHistorySuccess]: (state, { payload }) => {
    const date = payload.date;
    if (today !== date) {
      const itemsHistory = payload.data.data;
      return { date, itemsHistory };
    }
  },
});

// const date = createReducer(initialDateState, {});

export default combineReducers({
  // date,
  currentProducts,
  history,
});
