import { configureStore } from "@reduxjs/toolkit";
import { chatApi } from "./api";

export const store = configureStore({
  reducer: {
    [chatApi.reducerPath]: chatApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chatApi.middleware),
});
// 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
