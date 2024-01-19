import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLastComics = createAsyncThunk(
  "get/pictures",
  async (_, thunkApi) => {
    const url =
      "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=c87027ae7e999f1d55f30abb6cd8640a&hash=9eda1bfd398c2b6e2f47bf5c6f9bbc2f";
    const params = {
      dateDescriptor: "lastWeek",
      limit: "60",
    };
    try {
      const { data } = await axios.get(url, { params });
      // console.log("data: ", data.data.results);
      return data.data.results;
      // це переходить в payload
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const fetchComicsBySearchData = createAsyncThunk(
  "get/comicsBySearchData",
  async (formData, thunkApi) => {
    const url = `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=c87027ae7e999f1d55f30abb6cd8640a&hash=9eda1bfd398c2b6e2f47bf5c6f9bbc2f&startYear=${formData.year}&format=${formData.format}&orderBy=${formData.order}&titleStartsWith=${formData.title}`;
    const params = {
      limit: "60",
    };
    try {
      const { data } = await axios.get(url, { params });
      console.log("data: ", data.data.results);
      return data.data.results;
      // це переходить в payload
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

const initialState = {
  isLoading: false,
  error: null,
  searchData: null,
};

const searchSlice = createSlice({
  // Ім'я слайсу
  name: "search",
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchLastComics.pending, (state, _) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchLastComics.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.searchData = payload;
      })
      .addCase(fetchLastComics.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchComicsBySearchData.pending, (state, _) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchComicsBySearchData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.searchData = payload;
      })
      .addCase(fetchComicsBySearchData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});
export const searchReducer = searchSlice.reducer;
