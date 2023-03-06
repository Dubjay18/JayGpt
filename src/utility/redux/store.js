import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { chatApi } from "./api";
import authReducer from "./slices/auth.slice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chatApi.middleware),
});
// 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
