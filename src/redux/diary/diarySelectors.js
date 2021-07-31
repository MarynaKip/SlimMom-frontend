import { createSelector } from '@reduxjs/toolkit';

const getProducts = state => state.diary.items;
//eslint-disable-next-line
export default { getProducts };
