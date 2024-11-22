import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: null,
  enrollments: [],
};
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setEnrollments: (state, action) => {
      state.enrollments = action.payload
    }
  },
});
export const { setCurrentUser, setEnrollments } = accountSlice.actions;
export default accountSlice.reducer;