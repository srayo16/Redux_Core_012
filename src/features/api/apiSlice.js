import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productAPI = createApi({
    reducerPath: "ProductAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: ""
    }),
    tagTypes: ["Products"],
    endpoints:(builder)=>({
        // get korle query
        // for others korle mutation
        getProduct: builder.query({
            query:()=> "products.json",
            providesTags: ["Products"]

        }),
        addProduct: builder.mutation({
            query:(data )=>({
                url: "",
                method: "POST",
                body: data
            }),
            invalidatesTags:["Products"],
        }),
        deleteProduct: builder.mutation({
            query:(data )=>({
                url: "",
                method: "DELETE",
            }),
            invalidatesTags:["Products"]
        }),
    })
});

export const {useGetProductQuery, useAddProductMutation, useDeleteProductMutation}= productAPI;