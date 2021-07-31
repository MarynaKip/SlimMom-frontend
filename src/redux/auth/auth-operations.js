import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://obscure-shelf-16384.herokuapp.com';

const token = {
    set(JWT) {
        axios.defaults.headers.common.Authorization = `Bearer ${JWT}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

//registration reducer
const signUpUser = personalData => async dispatch => {
    dispatch(authActions.signUpRequest());

    try {
        const response = await axios.post('/api/user/registration', personalData);

        token.set(response.data.user.token);
        dispatch(authActions.signUpSuccess(response.data));
    } catch (error) {
        dispatch(authActions.signUpError(error.message));
    }
};

//login reducer
const signInUser = personalData => async dispatch => {
    dispatch(authActions.signInRequest());

    try {
        const response = await axios.post('/api/user/login', personalData);

        token.set(response.data.user.token);
        dispatch(authActions.signInSuccess(response.data));
    } catch (error) {
        dispatch(authActions.signInError(error.message));
    }
};

//logout reducer
const signOutUser = () => async dispatch => {
    dispatch(authActions.signOutRequest());

    try {
        await axios.post('/api/user/logout');

        token.unset();
        dispatch(authActions.signOutSuccess());
    } catch (error) {
        dispatch(authActions.signOutError(error.message));
    }
};

//about user reducer
const getCurrentUser = () => async (dispatch, getState) => {
    const {
        persistedReducer: { token: persistedToken },
    } = getState();

    if (!persistedToken) return;

    token.set(persistedToken);

    dispatch(authActions.getCurrentUserRequest());

    try {
        const response = await axios.get('users/current');
        dispatch(authActions.getCurrentUserSuccess(response.data));
    } catch (error) {
        dispatch(authActions.getCurrentUserError(error.message));
    }
};

// eslint-disable-next-line
export default {
    signUpUser,
    signInUser,
    signOutUser,
    getCurrentUser
};