import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
  },
  reducers: {
    login: (state, action) => {},
    logout: (state) => {},
    createAccount: (state, action) => {},
  },
});
