import { adminBaseQuery, companyBaseQuery, adminApiRoot, companyApiRoot } from '../../global'
import { createApi } from '@reduxjs/toolkit/query/react'

export const adminApis = createApi({
  reducerPath: 'adminApi',
  baseQuery: adminBaseQuery,
  endpoints: builder => ({
    fetchCompaniesList: builder.query<any, any>({
      query: () => ({
        url: `https://talent-pool.onrender.com/admin-api/v1/get-companies?status=approved`,
        method: 'GET'
      })
    }),
    adminLogin: builder.mutation<any, any>({
      query: (data: any) => ({
        url: `${adminApiRoot}/login`,
        method: "POST",
        body: data.body,
      }),
    }),
  }),
})

export const companyApi = createApi({
  reducerPath: 'companyApi',
  baseQuery: companyBaseQuery,
  endpoints: builder => ({
    companyLogin: builder.mutation<any, any>({
      query: (data: any) => ({
        url: `${companyApiRoot}/login`,
        method: "POST",
        body: data.body,
      }),
    }),
  }),
})

export const { useFetchCompaniesListQuery, useAdminLoginMutation } = adminApis
export const { useCompanyLoginMutation } = companyApi
