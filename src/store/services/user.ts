import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IDNameList, LetterList } from "../../types";

const BASE_URL = "https://api.humelo.exam/";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getIdName: builder.query<IDNameList, null>({
      query: () => "id-name-list",
    }),

    getLetter: builder.query<LetterList, null>({
      query: () => "character-list",
    }),
  }),
});

export const { useGetIdNameQuery, useGetLetterQuery } = userApi;
