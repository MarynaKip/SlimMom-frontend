import axios from 'axios';
import actions from './diaryAction';

const fetchProductsSearch = () => async dispatch => {
    dispatch(actions.fetchProductsSearchRequest());

    try {
        const { data } = await axios.get('/contacts');
        dispatch(actions.fetchProductsSearchSuccess(data));
    } catch (error) {
        dispatch(actions.fetchProductsSearchError(error.message));
    }
};
//eslint-disable-next-line
export default { fetchProductsSearch };
