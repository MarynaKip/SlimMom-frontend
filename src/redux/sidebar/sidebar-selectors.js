import { createSelector } from '@reduxjs/toolkit';

const getDailyAmount = state => state.user.dailyAmount;
const getConsumedCal = state => state.user.consumedCal; //нужно узнать место хранения данных в редаксе
const getNotRecommendedProducts = state => state.user.notRecommendedProducts;
const getCurrentDate = state => state.currentDate.date; //нужно узнать место хранения данных в редаксе

const getLeftCal = createSelector(
    [getDailyAmount, getConsumedCal],
    (dailyAmount, consumedCal) => dailyAmount - consumedCal,
);

const getPercentage = createSelector(
    [getDailyAmount, getConsumedCal],
    (dailyAmount, consumedCal) => Math.round((consumedCal * 100) / dailyAmount),
);

const sidebarSelector = {
    getNotRecommendedProducts,
    getCurrentDate,
    getLeftCal,
    getPercentage,
};

export default sidebarSelector;
