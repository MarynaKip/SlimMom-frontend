import { createSelector } from '@reduxjs/toolkit';

const getProducts = state => state.diary.items;
const getDate = state => state.diary.history.date;
//eslint-disable-next-line
export default { getProducts, getDate };
