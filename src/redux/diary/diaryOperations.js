import actions from './diaryActions';
import axios from 'axios';

axios.defaults.headers.common['Authorization'] =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTA0ZjRiNjJiODVmYTAwMWMyMmFlZDYiLCJlbWFpbCI6ImxhaW1hdkBnbWFpbC5jb20iLCJpYXQiOjE2Mjc3MTQ3NDJ9.600zEwSXhkCYvV1Tzml5wZ7fmI22-pA_R7x9gwi5X3s';

const addProduct =
    ({ productName, productWeight }) =>
    async dispatch => {
        const product = {
            date: new Date()
                .toLocaleDateString()
                .split('.')
                .reverse()
                .join('-'),
            productName,
            productWeight,
        };

        dispatch(actions.addProductRequest());

        try {
            const { data } = await axios.post('https://obscure-shelf-16384.herokuapp.com/api/eaten_products');
            dispatch(actions.addProductSuccess(data));
        } catch (error) {
            dispatch(actions.addProductError(error.message));
        }
    };
//eslint-disable-next-line
export default { addProduct };
