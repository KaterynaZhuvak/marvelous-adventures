import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLastComics = createAsyncThunk(
  "get/pictures",
  async (_, thunkApi) => {
    const url =
      "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=c87027ae7e999f1d55f30abb6cd8640a&hash=9eda1bfd398c2b6e2f47bf5c6f9bbc2f";
    const params = {
      dateDescriptor: "lastWeek",
      limit: "12",
    };
    try {
      const { data } = await axios.get(url, { params });
      return data.data.results;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

const initialState = {
  lastComics: [],
  isLoading: false,
  error: null,
};

const homeSlice = createSlice({
  name: "home",

  initialState,

  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchLastComics.pending, (state, _) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchLastComics.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.lastComics = payload;
      })
      .addCase(fetchLastComics.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export const homeReducer = homeSlice.reducer;
