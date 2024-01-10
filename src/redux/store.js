import { configureStore } from "@reduxjs/toolkit";
import { homeReducer } from "./homeReducer";
import { generalModalReducer } from "./generalModalReducer";
import { charactersModalReducer } from "./charactersModalReducer";

export const store = configureStore({
  reducer: {
    homeStore: homeReducer,
    generalModal: generalModalReducer,
    charactersModal: charactersModalReducer,
  },
});
