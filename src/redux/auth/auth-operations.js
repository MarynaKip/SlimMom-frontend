import axios from 'axios';
import authActions from './auth-actions';
<<<<<<< HEAD
const path = 'http://localhost:8080/api';
=======
const path = 'https://obscure-shelf-16384.herokuapp.com';
>>>>>>> dev

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
<<<<<<< HEAD
const register = (credentials) => async (dispatch) => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post('/user/registration', credentials);
=======
const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post('/api/user/registration', credentials);
>>>>>>> dev
    console.log(response.data);
    token.set(response.data.token);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

// add token to header after success user login
<<<<<<< HEAD
const logIn = (credentials) => async (dispatch) => {
  dispatch(authActions.loginRequest());
  try {
    const response = await axios.post('/users/login', credentials);

    token.set(response.data.token);
=======
const logIn = credentials => async dispatch => {
  dispatch(authActions.loginRequest());
  try {
    const response = await axios.post('/api/user/login', credentials);
    // console.log('response.data', response.data.user.token);
    token.set(response.data.user.token);
>>>>>>> dev
    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

// delete token after success user logOut
<<<<<<< HEAD
const logOut = () => async (dispatch) => {
  dispatch(authActions.logoutRequest());
  try {
    await axios.post('/users/logOut');
=======
const logOut = () => async dispatch => {
  dispatch(authActions.logoutRequest());
  try {
    await axios.post('/api/user/logout');
>>>>>>> dev

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
<<<<<<< HEAD
    const response = await axios.get('/users/current');
    dispatch(authActions.getCurrentUserSuccess(response.data));
=======
    const response = await axios.get('/api/user/current');
    dispatch(authActions.getCurrentUserSuccess(response.data.currentUser));
>>>>>>> dev
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

<<<<<<< HEAD
export default { register, logOut, logIn, getCurrentUser };
=======
export default { register, logOut, logIn, getCurrentUser };
>>>>>>> dev
