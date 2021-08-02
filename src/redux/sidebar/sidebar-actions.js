import { createAction } from '@reduxjs/toolkit';

export const getUserCurrentDataRequest = createAction(
  'getUserCurrentDataRequest',
);
export const getUserCurrentDataSuccess = createAction(
  'getUserCurrentDataSuccess',
);
export const getUserCurrentDataRequestFail = createAction(
  'getUserCurrentDataRequestFail',
);

const sidebarActions = {
  getUserCurrentDataRequest,
  getUserCurrentDataSuccess,
  getUserCurrentDataRequestFail,
};
export default sidebarActions;
