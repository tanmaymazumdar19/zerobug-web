import { employeesArray } from "./../../utils/data";
import type { Slice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// import type { Slice } from '@reduxjs/toolkit'

export interface AuthState {
  employees: any[];
}
const initialState: AuthState = {
  employees: [...employeesArray],
};

const authSlice: Slice = createSlice({
  name: "GetHired",
  initialState,
  reducers: {
    createUser: (state, { payload }) => {
      state.employeesArray.push(payload);
    },
    editUser: (state, { payload }) => {
      state.employeesArray.map((item: any) => {
        if (item.id) {
          item = payload;
        }
        return item;
      });
    },
  },
});

export const { storeLoginToken, resetAuthToken } = authSlice.actions;
export default authSlice.reducer;
