import { configureStore } from "@reduxjs/toolkit";
import { homeReducer } from "./homeReducer";
import { generalModalReducer } from "./generalModalReducer";
import { charactersModalReducer } from "./charactersModalReducer";
import { searchReducer } from "./searchReducer";

export const store = configureStore({
  reducer: {
    homeStore: homeReducer,
    generalModal: generalModalReducer,
    charactersModal: charactersModalReducer,
    searchStore: searchReducer,
  },
});
