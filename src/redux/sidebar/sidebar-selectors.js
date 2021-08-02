import { createSelector } from '@reduxjs/toolkit';

const getDailyAmount = state => state.currentDateData.dailyAmount;
const getConsumedCal = state => state.currentDateData.consumedCal; //нужно узнать место хранения данных в редаксе
const getNotRecommendedProducts = state => state.user.notRecommendedProducts;
const getCurrentDate = state => state.currentDateData.date; //нужно узнать место хранения данных в редаксе

const getLeftCal = createSelector(
  [getDailyAmount, getConsumedCal],
  (dailyAmount, consumedCal) => dailyAmount - consumedCal,
);

const getPercentage = createSelector(
  [getDailyAmount, getConsumedCal],
  (dailyAmount, consumedCal) => Math.round((consumedCal * 100) / dailyAmount),
);

const sidebarSelectors = {
  getNotRecommendedProducts,
  getCurrentDate,
  getLeftCal,
  getPercentage,
};

export default sidebarSelectors;
