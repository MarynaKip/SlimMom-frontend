import { createReducer, combineReducers } from '@reduxjs/toolkit';
import sidebarActions from './sidebar-actions';

const currentDateData = createReducer([], {
    [sidebarActions.getUserCurrentDataSuccess]: (state, { payload }) => {},
});

export default currentDateData;
