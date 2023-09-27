import { configureStore } from "@reduxjs/toolkit";
import { default as postReducer } from "./postSlice";
export const store = configureStore({
  reducer: {
    post: postReducer,
  },
});