import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ecommerceApi = createApi({
    reducerPath: "ecommerceApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3006/" }),
    endpoints: builder => ({
        getCategorys: builder.query({
            query: () => "/categorys"
        }),
        getProducts: builder.query({
            query: () => "products"
        }),
        getProductsByCategory: builder.query({
            query: (category) => `products?category_like=^${category}`
        }),
        getProductById: builder.query({
            query: (id) => `products/${id}`
        }),
       
    })
})
export const {
    useGetCategorysQuery,
    useGetProductsByCategoryQuery,
    useGetProductByIdQuery,
    useGetProductsQuery
} = ecommerceApi
export default ecommerceApi;
