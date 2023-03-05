import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    signout: (state) => {
      state.value = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, signout } = authSlice.actions;

export default authSlice.reducer;
