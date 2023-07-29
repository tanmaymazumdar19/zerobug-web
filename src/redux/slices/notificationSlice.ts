import { staticRequestsArray } from "./../../utils/data";
import type { Slice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// import type { Slice } from '@reduxjs/toolkit'

export interface AuthState {
  notificationArray: any[];
}
const initialState: AuthState = {
  notificationArray: [...staticRequestsArray],
};

const notificationSlice: Slice = createSlice({
  name: "notification",
  initialState,
  reducers: {},
});

// export const { createUser, editUser } = notificationSlice.actions;
export default notificationSlice.reducer;
