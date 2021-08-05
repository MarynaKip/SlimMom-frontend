import { createSelector } from '@reduxjs/toolkit';

//10 * вес + 6.25 * рост - 5 * возраст - 161 - 10 * (вес - желаемый вес)

const getDailyMealLocal = state => {
  const { height, age, currentWeight, desiredWeight, bloodType } =
    state.auth.user;
  const dailyMealLocal =
    10 * currentWeight +
    6.25 * height -
    5 * age -
    161 -
    10 * (currentWeight - desiredWeight);
  return dailyMealLocal;
};
const getDailyMeal = state => state.auth.user.dailyNorm;
const getConsumedCal = state => {
  const allCurrentProducts = state.diary.currentProducts;
  if (!allCurrentProducts) {
    return null;
  } else {
    const kKalArray = allCurrentProducts.map(prod => Number(prod.productKkal));
    const total = kKalArray.reduce((acc, kKal) => acc + kKal, 0);
    return total;
  }
};
const notAllowedProducts = state => {
  if (!state.auth.user.notAllowedProduct) {
    return;
  } else {
    return state.auth.user.notAllowedProduct.join(', ');
  }
};

const getCurrentDate = state => state.diary.currentDate;

const getLeftCal = createSelector(
  [getDailyMeal, getConsumedCal],
  (dailyNorm, consumedCal) => dailyNorm - consumedCal,
);

const getPercentage = createSelector(
  [getDailyMeal, getConsumedCal],
  (dailyNorm, consumedCal) => Math.round((consumedCal * 100) / dailyNorm),
);

const sidebarSelectors = {
  getDailyMealLocal,
  getDailyMeal,
  getConsumedCal,
  notAllowedProducts,
  getCurrentDate,
  getLeftCal,
  getPercentage,
};

export default sidebarSelectors;
