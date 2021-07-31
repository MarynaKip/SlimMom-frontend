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

const initialDiaryState = {
    items:[]
};

const items = createReducer(initialDiaryState.items, {
  // [fetchContactsSuccess]: (_, { payload }) => payload,
  [actions.addProductSuccess]: (state, { payload }) => [payload, ...state],
  // [deleteContactSuccess]: (state, { payload }) =>
  //   state.filter(({ id }) => id !== payload),

}); 

export default combineReducers({
  items
});

