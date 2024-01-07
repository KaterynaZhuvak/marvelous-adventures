import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const publicKey = "c87027ae7e999f1d55f30abb6cd8640a";
// const privateKey = "84bb77010864f3e923dd3f8bbce57da4742981d3";

// http://gateway.marvel.com/v1/public/comics?ts=1&apikey=c87027ae7e999f1d55f30abb6cd8640a&hash=9eda1bfd398c2b6e2f47bf5c6f9bbc2f

// let date = new Date();
// let ts = date.getTime();

// var md5 = require("md5");
// let message = ts + privateKey + publicKey;

// export const instance = axios.create({
//   baseURL: "https://gateway.marvel.com",
// });

export const fetchLastComics = createAsyncThunk(
  "get/pictures",
  async (_, thunkApi) => {
    const url =
      "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=c87027ae7e999f1d55f30abb6cd8640a&hash=9eda1bfd398c2b6e2f47bf5c6f9bbc2f";
    const params = {
      dateDescriptor: "lastWeek",
      limit: "12",
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

const initialState = {
  lastComics: [],
  isLoading: false,
  error: null,
};

// export const homeReducer = (state = initialState, action) => {
//      switch (action.type) {
//     case fetchLastComics.fulfilled:
//       return {
//         ...state,
//         lastComics: action.payload,
//       };
//     default:
//       return state;
//   }
// };

const homeSlice = createSlice({
  // Ім'я слайсу
  name: "home",
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
        state.lastComics = payload;
      })
      .addCase(fetchLastComics.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

// Генератори екшенів
// const {} = homeSlice.actions;
// Редюсер слайсу
export const homeReducer = homeSlice.reducer;
