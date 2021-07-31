import axios from 'axios';
import sidebarActions from './sidebar-actions';

axios.defaults.baseURL = 'https://obscure-shelf-16384.herokuapp.com/api';

const getCurrentData = () => async dispatch => {
    dispatch(sidebarActions.getUserCurrentDataRequest());
    try {
        const response = await axios.get('/user/current');
        dispatch(sidebarActions.getUserCurrentDataSuccess(response));
    } catch (error) {
        dispatch(sidebarActions.getUserCurrentDataFail(error));
    }
};

export default getCurrentData;
