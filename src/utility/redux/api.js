import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query";
// import AsyncStorage from "@react-native-async-storage/async-storage";

export const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openai.com/v1",
  }),
  endpoints: (builder) => ({
    getBotMessage: builder.mutation({
      query: (message) => ({
        url: "/engines/davinci-codex/completions",
        method: "POST",
        body: {
          prompt: message,
          max_tokens: 50,
          temperature: 0.5,
          n: 1,
          stop: "\n",
        },
      }),
    }),
  }),
});

export const { useGetBotMessageQuery } = chatApi;
