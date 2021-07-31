import { createAction } from '@reduxjs/toolkit';


const addProductRequest = createAction('diary/add_Request');
const addProductSuccess = createAction('diary/add_Success');
const addProductError = createAction('diary/add_Error');

const deleteProductRequest = createAction('diary/delete_Request');
const deleteProductSuccess = createAction('diary/delete_Success');
const deleteProductError = createAction('diary/delete_Error');

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
