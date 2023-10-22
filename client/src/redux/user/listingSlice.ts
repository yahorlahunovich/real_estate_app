import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {};

export const listingSlice = createSlice({
  name: "listing",
  initialState,
  reducers: {},
});

// export const {} = listingSlice.actions;
export const listingReducer = listingSlice.reducer;
