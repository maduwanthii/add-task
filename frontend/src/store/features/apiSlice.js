import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL, 
    prepareHeaders: (headers) => {
      if (typeof window !== "undefined") { 
        const token = sessionStorage.getItem("access_token");
        if (token) headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getClientStaff: builder.query({
      query: () => "/api/client-staff",
      providesTags: ["ClientStaff"],
    }),
    refreshToken: builder.mutation({
      query: (refreshToken) => ({
        url: "/auth/refresh-token",
        method: "POST",
        body: { refresh_token: refreshToken },
      }),
    }),
    addUser: builder.mutation({
      query: (newUser) => ({
        url: "/api/adduser",
        method: "POST",
        body: newUser,
      }),
    }),
  }),
});


export const { useGetClientStaffQuery, useRefreshTokenMutation, useAddUserMutation } = apiSlice;
