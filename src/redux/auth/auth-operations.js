import axios from 'axios';
import authActions from './auth-actions';
const path = 'https://obscure-shelf-16384.herokuapp.com';

axios.defaults.baseURL = path;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// add token to header after success user register
const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post('/api/user/registration', credentials);
    console.log(response.data);
    token.set(response.data.token);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

// add token to header after success user login
const logIn = credentials => async dispatch => {
  dispatch(authActions.loginRequest());
  try {
    const response = await axios.post('/api/user/login', credentials);
    // console.log('response.data', response.data.user.token);
    token.set(response.data.user.token);
    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

// delete token after success user logOut
const logOut = () => async dispatch => {
  dispatch(authActions.logoutRequest());
  try {
    await axios.post('/api/user/logout');

    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
  }
};

// get token from cerrent user state if it exist or do nothing if not exist
const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(authActions.getCurrentUserRequest());

  try {
    const response = await axios.get('/api/user/current');
    dispatch(authActions.getCurrentUserSuccess(response.data.current));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

export default { register, logOut, logIn, getCurrentUser };
