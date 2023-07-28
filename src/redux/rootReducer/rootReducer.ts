import { combineReducers } from "@reduxjs/toolkit";

import { api } from "../api/api";
import authSlice from "../slices/authSlice";
import modalSlice from "../slices/modalSlice";

const rootReducer = combineReducers({
  authSlice,
  modalSlice,
  [api.reducerPath]: api.reducer,
});

export default rootReducer;
