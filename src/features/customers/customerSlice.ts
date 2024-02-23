import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer(state, action) {
      state.fullName = action.payload.fullName;
      state.nationalID = action.payload.nationalId;1
      state.createdAt = new Date().toISOString();
    },
  },
});

export const { createCustomer } = customerSlice.actions;

export default customerSlice.reducer;
