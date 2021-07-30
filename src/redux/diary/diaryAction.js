import { createAction } from '@reduxjs/toolkit';


const fetchProductsSearchRequest = createAction('products/fetch_Request');
const  fetchProductsSearchSuccess = createAction('products/fetch_Success');
const  fetchProductsSearchError = createAction('products/fetch_Error');

const addContactRequest = createAction('contacts/add_Request');
const addContactSuccess = createAction('contacts/add_Success');
const addContactError = createAction('contacts/add_Error');

const deleteContactRequest = createAction('contacts/delete_Request');
const deleteContactSuccess = createAction('contacts/delete_Success');
const deleteContactError = createAction('contacts/delete_Error');

const changeFilter = createAction('contacts/changeFilter');

//eslint-disable-next-line
export default {
  fetchProductsSearchRequest,
  fetchProductsSearchSuccess,
  fetchProductsSearchError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
};
