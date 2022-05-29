import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductProps, ProductsResponse } from "../../../types";

export const productApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/products' }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductsResponse, void>({
      query: () => '/'
    })
  })
})

export const { useGetProductsQuery } = productApi
