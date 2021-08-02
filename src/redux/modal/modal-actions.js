import { createAction } from '@reduxjs/toolkit';

//open modal
const modalOpenRequest = createAction('modal/modalOpenRequest');
const modalOpenSuccess = createAction('modal/modalOpenSuccess');
const modalOpenError = createAction('modal/modalOpenError');

//close modal
const modalCloseRequest = createAction('modal/modalCloseRequest');
const modalCloseSuccess = createAction('modal/modalCloseSuccess');
const modalCloseError = createAction('modal/modalCloseError');

export default {
    modalOpenRequest,
    modalOpenSuccess,
    modalOpenError,
    modalCloseRequest,
    modalCloseSuccess,
    modalCloseError,
};
