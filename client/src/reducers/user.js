import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { value: { name: "", email: "", password: "" } },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },

    signup: (state, action) => {
      state.value = action.payload;
    },

    logout: (state) => {
      state.value = { name: "", email: "", password: "" };
    },
  },
});

export const { login, logout, signin } = userSlice.actions;

export default userSlice.reducer;
