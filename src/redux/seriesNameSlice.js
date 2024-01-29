import { createSlice } from "@reduxjs/toolkit";

export const seriesNameSlice = createSlice({
  name: "seriesName",
  initialState: {
    val: { favorite: ["Money Heist"] },
  },
  reducers: {
    setSeriesName: (state, action) => {
      state.val.favorite = [...state.val.favorite, ...action.payload];
    },
  },
});
