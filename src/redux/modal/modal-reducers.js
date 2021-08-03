import { createReducer } from '@reduxjs/toolkit';
import actions from './modal-actions';

const { modalOpenSuccess, modalCloseSuccess } = actions;

const isOpened = createReducer(false, {
  [modalOpenSuccess]: () => true,
  [modalCloseSuccess]: () => false,
});

export default isOpened;
