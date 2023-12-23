import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL }),
    reducerPath: "adminApi",
    tagTypes: [
        "User",

    ],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["User"],
        }),

    }),
});

export const {
    useGetUserQuery
} = api;


// export const authApi = createApi({
//     reducerPath: 'authApi',
//     baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
//     endpoints: (builder) => ({
//         register: builder.mutation({
//             query: (body) => ({
//                 url: '/register',
//                 method: 'POST',
//                 body,
//             }),
//         }),
//         login: builder.mutation({
//             query: (body) => ({
//                 url: '/login',
//                 method: 'POST',
//                 body,
//             }),
//         }),
//     }),
// });

// export const { useRegisterMutation, useLoginMutation } = authApi;

