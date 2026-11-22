import { configureStore } from "@reduxjs/toolkit";
import calcReduce from "../features/calcs/calcSlice";

export const store = configureStore({
  reducer: {
    calc: calcReduce,
  },
});