import { configureStore } from "@reduxjs/toolkit";
import { chatApi } from "./api";
import authReducer from "./slices/auth.slice";
export const store = configureStore({
  reducer: {
    [chatApi.reducerPath]: chatApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chatApi.middleware),
});
// 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
