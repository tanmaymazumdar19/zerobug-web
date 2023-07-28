import { combineReducers } from "@reduxjs/toolkit";

import { api } from "../api/api";
import authSlice from "../slices/authSlice";
import modalSlice from "../slices/modalSlice";
import getHiredSlice from "../slices/getHired";

const rootReducer = combineReducers({
  authSlice,
  modalSlice,
  getHiredSlice,
  [api.reducerPath]: api.reducer,
});

export default rootReducer;
