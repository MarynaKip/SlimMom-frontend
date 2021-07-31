import { createAction } from '@reduxjs/toolkit';


const addProductRequest = createAction('diary/addProductRequest');
const addProductSuccess = createAction('diary/addProductSuccess');
const addProductError = createAction('diary/addProductError');

const deleteProductRequest = createAction('diary/deleteProductRequest');
const deleteProductSuccess = createAction('diary/deleteProductSuccess');
const deleteProductError = createAction('diary/deleteProductError');

// const changeFilter = createAction('contacts/changeFilter');

//eslint-disable-next-line
export default {
    addProductRequest,
    addProductSuccess,
    addProductError,
    deleteProductRequest,
    deleteProductSuccess,
    deleteProductError,
};
