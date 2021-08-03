import { createAction } from '@reduxjs/toolkit';

//open modal
const modalOpenSuccess = createAction('modal/modalOpenSuccess');
//close modal
const modalCloseSuccess = createAction('modal/modalCloseSuccess');

export default {
  modalOpenSuccess,
  modalCloseSuccess,
};
