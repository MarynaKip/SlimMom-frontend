import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './modal-actions';

const {
  modalOpenRequest,
  modalOpenSuccess,
  modalOpenError,
  modalCloseRequest,
  modalCloseSuccess,
  modalCloseError,
} = actions;

const isOpened = createReducer(false, {
  [modalOpenSuccess]: () => true,
  [modalCloseSuccess]: () => false,
});

const error = createReducer(null, {
  [modalOpenError]: (_, { payload }) => payload,
  [modalCloseError]: (_, { payload }) => payload,
});

export default combineReducers({ isOpened, error });
