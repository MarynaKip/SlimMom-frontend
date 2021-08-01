import { createAction } from '@reduxjs/toolkit';


const addProductRequest = createAction('diary/addProductRequest');
const addProductSuccess = createAction('diary/addProductSuccess');
const addProductError = createAction('diary/addProductError');

const deleteProductRequest = createAction('diary/deleteProductRequest');
const deleteProductSuccess = createAction('diary/deleteProductSuccess');
const deleteProductError = createAction('diary/deleteProductError');

const productSearchRequest = createAction('diary/productSearchRequest');
const productSearchSuccess = createAction('diary/productSearchSuccess');
const productSearchError = createAction('diary/productSearchError');

const fetchHistoryRequest = createAction('diary/fetchHistoryRequest');
const fetchHistorySuccess = createAction('diary/fetchHistorySuccess');
const fetchHistoryError = createAction('diary/fetchHistoryError')

// const changeFilter = createAction('contacts/changeFilter');

//eslint-disable-next-line
export default {
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
  fetchHistoryError
};
