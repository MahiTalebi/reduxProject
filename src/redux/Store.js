import { configureStore } from "@reduxjs/toolkit";
import { seriesNameSlice } from "./seriesNameSlice";

export  const Store = configureStore({
  reducer: {
    seriesName: seriesNameSlice.reducer,
  },
});
