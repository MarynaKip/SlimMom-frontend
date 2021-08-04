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
    productListRequest,
  productListSuccess,
productListError
} = actions;

const initialDiaryState = {
  currentProducts: [],
};

const initialHistoryState = {
  date:'1970-01-01',
  itemsHistory: [],
};

const initialDateState = new Date()
  .toLocaleDateString()
  .split('.')
  .reverse()
  .join('-');

const initialSearchState = [];


const today = new Date().toLocaleDateString().split('.').reverse().join('-');



const currentProducts = createReducer(initialDiaryState.currentProducts, {
  [fetchHistorySuccess]: (state, { payload }) => {
    const date = payload.date;
    if (today === date) {
      return [...payload.data.data];
    }
  },
  [addProductSuccess]: (state, { payload }) => [payload.data, ...state],
  [deleteProductSuccess]: (state, { payload }) => {
    const newState = state.filter(({ productName }) => productName !== payload);
    return [...newState];
  },
});

const history = createReducer(initialHistoryState, {
  [fetchHistorySuccess]: (state, { payload }) => {
    const date = payload.date;
    const itemsHistory = payload.data.data;
    return { date, itemsHistory };
  },
  [addProductSuccess]: (state, { payload }) => {},
});


const search = createReducer(initialSearchState, {
  [productListSuccess]: (state, { payload }) => {
    return payload.data;
  },
 
});


const currentDate = createReducer(initialDateState, {});

export default combineReducers({
  currentDate,
  currentProducts,
  history,
  search
});
