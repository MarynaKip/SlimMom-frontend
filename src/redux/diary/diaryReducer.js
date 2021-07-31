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
    productSearchRequest,
    productSearchSuccess,
    productSearchError,
} = actions;

const initialDiaryState = {
    items: [],
    // searchQuery:''
};

const items = createReducer(initialDiaryState.items, {
    // [fetchContactsSuccess]: (_, { payload }) => payload,
    [actions.addProductSuccess]: (state, { payload }) => [
        payload.data,
        ...state,
    ],

    [actions.deleteProductSuccess]: (state, { payload }) => {
        // console.log('state', state);
        // console.log('payload', payload);
        state.filter(({ productName }) => productName !== payload);
    },
});

export default combineReducers({
    items,
    // searchQuery,
});
