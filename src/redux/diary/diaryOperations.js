import actions from './diaryActions';
import axios from 'axios';


const addProduct =
  ({ query, productWeight }) =>
  async dispatch => {
    const product = {
      date: new Date().toLocaleDateString().split('.').reverse().join('-'),
      productName: query,
      productWeight,
    };

    dispatch(actions.addProductRequest());

    try {
      const { data } = await axios.post(
        'https://obscure-shelf-16384.herokuapp.com/api/eaten_products',
        product,
      );
      dispatch(actions.addProductSuccess(data));
    } catch (error) {
      dispatch(actions.addProductError(error.message));
    }
  };

const deleteProduct =
  ({ productName }) =>
  async dispatch => {
    const productForDelete = {
      date: new Date().toLocaleDateString().split('.').reverse().join('-'),
      productName: productName,
    };

    dispatch(actions.deleteProductRequest());

    try {
      const { data } = await axios.delete(
        'https://obscure-shelf-16384.herokuapp.com/api/eaten_products',
        {
          data: {
            date: new Date()
              .toLocaleDateString()
              .split('.')
              .reverse()
              .join('-'),
            productName,
          },
        },
      );
      dispatch(actions.deleteProductSuccess(productName));
    } catch (error) {
      dispatch(actions.deleteProductError(error.message));
    }
  };

const fetchProducts =
  ({ searchQuery }) =>
  async dispatch => {
    dispatch(actions.productSearchRequest());

    try {
      const { data } = await axios.get(
        `https://obscure-shelf-16384.herokuapp.com/api/products?input=${searchQuery}`,
      );
      dispatch(actions.productSearchSuccess(data));
    } catch (error) {
      dispatch(actions.productSearchError(error.message));
    }
  };

const fetchHistory =
  ({ value }) =>
  async dispatch => {
    const date = value.toLocaleDateString().split('.').reverse().join('-');
    dispatch(actions.fetchHistoryRequest());

    try {
      const { data } = await axios.get(
        `https://obscure-shelf-16384.herokuapp.com/api/eaten_products/${date}`,
      );
      const payload = {
        date,
        data,
      };
      dispatch(actions.fetchHistorySuccess(payload));
    } catch (error) {
      dispatch(actions.fetchHistoryError(error.message));
    }
  };

//eslint-disable-next-line
export default { addProduct, deleteProduct, fetchProducts, fetchHistory };
// https://obscure-shelf-16384.herokuapp.com/api/products?input=Хлебцы
