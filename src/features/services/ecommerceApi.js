import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ecommerceApi = createApi({
    reducerPath: "ecommerceApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3006/" }),
    // prepareHeaders: (headers) => {
    //   // لو صار عندك توكن بعد التسجيل/الدخول
    //   const token = localStorage.getItem("token");
    //   if (token) headers.set("authorization", Bearer ${token});
    //   return headers;
    // },
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
        //  POST /signup
    signup: builder.mutation({
      query: (userData) => ({
        url: "users",
        method: "POST",
        body: userData,
      }),
    }),
    // (اختياري) POST /login
    // login: builder.mutation({
    //   query: (credentials) => ({
    //     url: "/login",
    //     method: "POST",
    //     body: credentials,
    //   }),
    // }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: `users?email=${email}&password=${password}`,
        method: "GET",
      })
    })
       
    })
})
export const {
    useGetCategorysQuery,
    useGetProductsByCategoryQuery,
    useGetProductByIdQuery,
    useGetProductsQuery,
    useSignupMutation,
    useLoginMutation
} = ecommerceApi
export default ecommerceApi;
