import { combineReducers } from "@reduxjs/toolkit";

import { adminApis, companyApi } from "../api/api";
import authSlice from "../slices/authSlice";
import modalSlice from "../slices/modalSlice";

const rootReducer = combineReducers({
  authSlice,
  modalSlice,
  getHiredSlice,
  notificationSlice,
  [adminApis.reducerPath]: adminApis.reducer,
  [companyApi.reducerPath]: companyApi.reducer,
});

export default rootReducer;
