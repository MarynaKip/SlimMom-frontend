const getProducts = state => state.diary.currentProducts;
const getHistoryDate = state => state.diary.history.date;
const getHistoryProducts = state => state.diary.history.itemsHistory;
//eslint-disable-next-line
export default { getProducts, getHistoryDate, getHistoryProducts };
