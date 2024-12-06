import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const toysApi = createApi({
    reducerPath: 'toysApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://toy-store-server-blond.vercel.app' }),
    tagTypes: ['toys'],

    endpoints: (builder) => ({
        getToys: builder.query({
            query: () => '/toys',
            providesTags: ['toys']
        }),
        getCategoryToy: builder.query({
            query: (category) => `/toys/category/${category}`,
            providesTags: ['toys']
        }),
        getFeaturesToys: builder.query({
            query: () => '/toys/features',
            providesTags: ['toys']
        }),
        getSingleToy: builder.query({
            query: (id) => `/toys/${id}`
        }),
        getUsersToy: builder.query({
            query: (email) => `/my-toys?email=${email}`,
            providesTags: ['toys']
        }),
        setToy: builder.mutation({
            query: (toy) => ({
                url: '/toys',
                method: 'POST',
                body: toy
            }),
            invalidatesTags: ['toys']
        }),
        deleteToy: builder.mutation({
            query: (id) => ({
                url: `toys/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['toys']
        })
        // updateToy: builder.mutation({
        //     query: (toy) => ({
        //         url: '/'
        //     })
        // })
    })
})
export const { useGetToysQuery, useGetSingleToyQuery, useSetToyMutation, useGetUsersToyQuery, useDeleteToyMutation, useGetCategoryToyQuery, useGetFeaturesToysQuery } = toysApi;