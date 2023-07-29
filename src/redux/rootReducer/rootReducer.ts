import { combineReducers } from "@reduxjs/toolkit";

import { api } from "../api/api";
import authSlice from "../slices/authSlice";
import modalSlice from "../slices/modalSlice";
import notificationSlice from "../slices/notificationSlice";

const rootReducer = combineReducers({
  authSlice,
  modalSlice,
  notificationSlice,
  [api.reducerPath]: api.reducer,
});

export default rootReducer;
