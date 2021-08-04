const getProducts = state => state.diary.currentProducts;
const getHistoryDate = state => state.diary.history.date;
const getHistoryProducts = state => state.diary.history.itemsHistory;
const getToday = state => state.diary.currentDate;
const getSearchList = state => state.diary.search;
//eslint-disable-next-line
export default { getProducts, getHistoryDate, getHistoryProducts, getToday, getSearchList };
