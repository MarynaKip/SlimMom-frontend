const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserName = state => state.auth.user.name;

const getError = state => state.auth.error;

const getToken = state => state.auth.user.token;

const getUserCredentials = state => ({
  height: state.auth.user.height,
  age: state.auth.user.age,
  currentWeight: state.auth.user.currentWeight,
  desiredWeight: state.auth.user.desiredWeight,
  bloodType: state.auth.user.bloodType,
});

const getDailyNorm = state => state.auth.user.dailyNorm;

const getNotAllowedProducts = state =>
  state.auth.user.notAllowedProduct;

export default {
  getIsAuthenticated,
  getUserName,
  getError,
  getToken,
  getUserCredentials,
  getDailyNorm,
  getNotAllowedProducts
};
