import type { Slice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
};

const modalSlice: Slice = createSlice({
  name: "modalReducer",
  initialState,
  reducers: {
    setShowModal: (state, { payload }) => {
      state.showModal = payload;
    },
  },
});

export const { setShowModal } = modalSlice.actions;
export default modalSlice.reducer;
