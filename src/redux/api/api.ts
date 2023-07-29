import {
  adminApiRoot,
  adminBaseQuery,
  companyApiRoot,
  companyBaseQuery,
} from "../../global";
import { createApi } from "@reduxjs/toolkit/query/react";

export const adminApis = createApi({
  reducerPath: "api",
  baseQuery: adminBaseQuery,
  tagTypes: ["Posts"], // provide tags here whose api data you want to cache
  endpoints: (builder) => ({
    fetchCompaniesList: builder.query<any, any>({
      query: () => ({
        url: `${adminApiRoot}/get-companies?status=approved`,
        method: "GET",
      }),
    }),
    adminLogin: builder.mutation<any, any>({
      query: (data: any) => ({
        url: `${adminApiRoot}/login`,
        method: "POST",
        body: data.body,
      }),
    }),
  }),
});

export const companyApi = createApi({
  reducerPath: "api",
  baseQuery: companyBaseQuery,
  tagTypes: ["Posts"], // provide tags here whose api data you want to cache
  endpoints: (builder) => ({
    companyLogin: builder.mutation<any, any>({
      query: (data: any) => ({
        url: `${companyApiRoot}/login`,
        method: "POST",
        body: data.body,
      }),
    }),
  }),
});

export const { useFetchCompaniesListQuery, useAdminLoginMutation } = adminApis;
export const { useCompanyLoginMutation } = companyApi;
