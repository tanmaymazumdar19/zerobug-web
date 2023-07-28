import { adminBaseQuery, companyBaseQuery } from '../../global'
import { createApi } from '@reduxjs/toolkit/query/react'

export const adminApis = createApi({
  reducerPath: 'api',
  baseQuery: adminBaseQuery,
  tagTypes: ['Posts'], // provide tags here whose api data you want to cache
  endpoints: builder => ({
    fetchCompaniesList: builder.query<any, any>({
      query: () => ({
        url: `${adminBaseQuery}/get-companies?status=approved`,
        method: 'GET'
      })
    }),
    adminLogin: builder.mutation<any, any>({
      query: (data: any) => ({
        url: `${adminBaseQuery}/login`,
        method: "POST",
        body: data.body,
      }),
    }),
  }),
})

export const companyApi = createApi({
  reducerPath: 'api',
  baseQuery: companyBaseQuery,
  tagTypes: ['Posts'], // provide tags here whose api data you want to cache
  endpoints: builder => ({
    companyLogin: builder.mutation<any, any>({
      query: (data: any) => ({
        url: `${companyBaseQuery}/login`,
        method: "POST",
        body: data.body,
      }),
    }),
  }),
})

export const { useFetchCompaniesListQuery, useAdminLoginMutation } = adminApis
export const { useCompanyLoginMutation } = companyApi
