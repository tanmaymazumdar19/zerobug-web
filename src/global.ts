import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { RootState } from './redux/store/store'

export const companyApiRoot = 'https://talent-pool.onrender.com/api/v1'
export const adminApiRoot = 'https://talent-pool.onrender.com/admin-api/v1'

export const adminBaseQuery = fetchBaseQuery({
  baseUrl: adminApiRoot,
  prepareHeaders: (headers: any, { getState }: any) => {
    const token: any = (getState() as RootState).authSlice.userToken
    if (token) {
      headers.set(`Authorization`, `Bearer ${token}`)
    }
    return headers
  },
})

export const companyBaseQuery = fetchBaseQuery({
  baseUrl: companyApiRoot,
  prepareHeaders: (headers: any, { getState }: any) => {
    const token: any = (getState() as RootState).authSlice.userToken
    if (token) {
      headers.set('AuthorizationToken', token)
    }
    return headers
  },
})
