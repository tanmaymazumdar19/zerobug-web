import { combineReducers } from "@reduxjs/toolkit";

import { adminApis, companyApi } from "../api/api";
import authSlice from "../slices/authSlice";
import modalSlice from "../slices/modalSlice";
import getHiredSlice from "../slices/getHired";

const rootReducer = combineReducers({
  authSlice,
  modalSlice,
  getHiredSlice,
  [adminApis.reducerPath]: adminApis.reducer,
  [companyApi.reducerPath]: companyApi.reducer,
});

export default rootReducer;
