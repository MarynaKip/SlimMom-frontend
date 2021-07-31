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
} = actions;

const products = {
    items:[]
};

const items = createReducer(products.items, {
  // [fetchContactsSuccess]: (_, { payload }) => payload,
  [addProductSuccess]: (state, { payload }) => [payload, ...state],
  // [deleteContactSuccess]: (state, { payload }) =>
  //   state.filter(({ id }) => id !== payload),

}); 

export default combineReducers({
  items
});