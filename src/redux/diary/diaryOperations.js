import actions from './diaryActions';
import axios from 'axios';

axios.defaults.headers.common['Authorization'] =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTA0ZjRiNjJiODVmYTAwMWMyMmFlZDYiLCJlbWFpbCI6ImxhaW1hdkBnbWFpbC5jb20iLCJpYXQiOjE2Mjc3MTQ3NDJ9.600zEwSXhkCYvV1Tzml5wZ7fmI22-pA_R7x9gwi5X3s';

const addProduct =
    ({ query, productWeight }) =>
    async dispatch => {
        const product = {
            date: new Date()
                .toLocaleDateString()
                .split('.')
                .reverse()
                .join('-'),
            productName: query,
            productWeight,
        };

        dispatch(actions.addProductRequest());

        try {
            const { data } = await axios.post(
                'https://obscure-shelf-16384.herokuapp.com/api/eaten_products',
                product
            );
            dispatch(actions.addProductSuccess(data));
        } catch (error) {
            dispatch(actions.addProductError(error.message));
        }
        };

const deleteProduct = ({ productName }) => async dispatch => {
            const productForDelete = {
            date: new Date()
                .toLocaleDateString()
                .split('.')
                .reverse()
                .join('-'),
            productName:productName,
        };

    dispatch(actions.deleteProductRequest());
    console.log(productForDelete)
  try {
   const { data } =  await axios.delete('https://obscure-shelf-16384.herokuapp.com/api/eaten_products', productForDelete);
    dispatch(actions.deleteProductSuccess(data));
  } catch (error) {
    dispatch(actions.deleteProductError(error.message));
  }
};


  const fetchProducts = ({searchQuery})=> async dispatch => {
    dispatch(actions.productSearchRequest());
   
  try {
      const { data } = await axios.get(`https://obscure-shelf-16384.herokuapp.com/api/products?input=${searchQuery}`);
      dispatch(actions.productSearchSuccess(data));
  } catch (error) {

    dispatch(actions.productSearchError(error.message));
  }
}
    
//eslint-disable-next-line
export default { addProduct, deleteProduct, fetchProducts};
// https://obscure-shelf-16384.herokuapp.com/api/products?input=Хлебцы
