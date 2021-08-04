const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserName = state => state.auth.user.name;

const getError = state => state.auth.error;

const getToken = state => state.auth.user.token;

const getNotAllowedProducts = state => state.auth.user.notAllowedProduct;

const getDailyNorm = state => state.auth.user.dailyNorm;

export default {
  getIsAuthenticated,
  getUserName,
  getError,
  getToken,
  getNotAllowedProducts,
  getDailyNorm,
};
