import { configureStore } from "@reduxjs/toolkit";
import { homeReducer } from "./homeReducer";
import { modalReducer } from "./modalReducer";

export const store = configureStore({
  reducer: {
    homeStore: homeReducer,
    modal: modalReducer,
  },
});



