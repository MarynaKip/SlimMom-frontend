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

const initialDiaryState = {
  items: [],

};

const initialHistoryState = {
    date: '',
    itemsHistory:[]
  }  

const items = createReducer(initialDiaryState.items, {
  [actions.addProductSuccess]: (state, { payload }) =>
    [ ...state, payload.data],
  [actions.deleteProductSuccess]: (state, { payload }) => {
    const newState = state.filter(({ productName }) => productName !== payload);
    return [...newState]
  },
});

const history = createReducer(initialHistoryState, {
  [actions.fetchHistorySuccess]: (state, { payload }) => {
  
const date = payload.date;
    const itemsHistory = payload.data.data;
    return {date,itemsHistory }
    // state.itemsHistory = 
 }
})


export default combineReducers({
  items,
  history
});
