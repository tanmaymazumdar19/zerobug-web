import { combineReducers } from "@reduxjs/toolkit";

import { adminApis, companyApi } from "../api/api";
import authSlice from "../slices/authSlice";
import modalSlice from "../slices/modalSlice";
import getHiredSlice from "../slices/getHired";
import notificationSlice from "../slices/notificationSlice";

const rootReducer = combineReducers({
  authSlice,
  modalSlice,
  getHiredSlice,
  notificationSlice,
  [adminApis.reducerPath]: adminApis.reducer,
  [companyApi.reducerPath]: companyApi.reducer,
});

export default rootReducer;
