import { createSelector } from '@reduxjs/toolkit';

//10 * вес + 6.25 * рост - 5 * возраст - 161 - 10 * (вес - желаемый вес)

const getDailyMealLocal = state => {
  const {
    height,
    age,
    currentWeight,
    desiredWeight,
    bloodType,
  } = state.auth.user;
  const dailyMealLocal =
    10 * currentWeight +
    6.25 * height -
    5 * age -
    161 -
    10 * (currentWeight - desiredWeight);
  return dailyMealLocal;
};
const getDailyMeal = state => state.auth.currentUser.dailyMeal;
const getConsumedCal = state => {
  const allCurrentProducts = state.diary.currentProducts;
  if (!allCurrentProducts) {
    return null;
  } else {
    const kKalArray = allCurrentProducts.map(prod => Number(prod.productKkal));
    const total = kKalArray.reduce((acc, kKal) => acc + kKal, 0);
    console.log(kKalArray);
    return total;
  }
};
const notAllowedProducts = state => {
  if (!state.calculator.dailyMeal.notAllowedProducts) {
    return;
  } else {
    return state.calculator.dailyMeal.notAllowedProducts.join();
  }
};

const getCurrentDate = state => state.diary.currentDate;

const getLeftCal = createSelector(
  [getDailyMealLocal, getConsumedCal],
  (dailyAmount, consumedCal) => dailyAmount - consumedCal,
);

const getPercentage = createSelector(
  [getDailyMealLocal, getConsumedCal],
  (dailyAmount, consumedCal) => Math.round((consumedCal * 100) / dailyAmount),
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
