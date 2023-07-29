import type { Slice } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface AuthState {
  userToken: string
  isAdmin: boolean
}
const initialState: AuthState = {
  userToken: '',
  isAdmin: false,
}

const authSlice: Slice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    storeLoginToken: (state, { payload }) => {
      state.userToken = payload?.token
      state.isAdmin = payload.isAdmin
    },
    resetAuthToken: state => {
      state.userToken = null
      state.isAdmin = false
    },
  },
})

export const { storeLoginToken, resetAuthToken } = authSlice.actions
export default authSlice.reducer
