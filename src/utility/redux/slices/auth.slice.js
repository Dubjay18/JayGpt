import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginFunc: (state, action) => {
      state.value = action.payload;
    },
    signoutFunc: (state) => {
      state.value = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginFunc, signoutFunc } = authSlice.actions;

export default authSlice.reducer;
