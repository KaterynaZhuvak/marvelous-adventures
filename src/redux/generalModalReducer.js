import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isOpenModal: false,
  creators: null,
  characters: null,
  modalId: null,
  modalData: null,
  isLoading: false,
  error: null,
};

export const fetchComicsById = createAsyncThunk(
  "get/picturesById",
  async (comicId, thunkApi) => {
    const url = `https://gateway.marvel.com/v1/public/comics/${comicId}?ts=1&apikey=c87027ae7e999f1d55f30abb6cd8640a&hash=9eda1bfd398c2b6e2f47bf5c6f9bbc2f`;
    try {
      const { data } = await axios.get(url);
      return data.data.results;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const fetchCharactersById = createAsyncThunk(
  "get/charactersById",
  async (comicId, thunkApi) => {
    const url = `https://gateway.marvel.com/v1/public/comics/${comicId}/characters?ts=1&apikey=c87027ae7e999f1d55f30abb6cd8640a&hash=9eda1bfd398c2b6e2f47bf5c6f9bbc2f`;
    try {
      const { data } = await axios.get(url);
      return data.data.results;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const fetchCreatorsById = createAsyncThunk(
  "get/creatorsById",
  async (comicId, thunkApi) => {
    const url = `https://gateway.marvel.com/v1/public/comics/${comicId}/creators?ts=1&apikey=c87027ae7e999f1d55f30abb6cd8640a&hash=9eda1bfd398c2b6e2f47bf5c6f9bbc2f`;
    try {
      const { data } = await axios.get(url);
      return data.data.results;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

const generalModalSlice = createSlice({
  name: "generalModal",

  initialState,

  reducers: {
    openModal: (state, { payload }) => {
      state.isOpenModal = true;
      state.modalId = payload;
    },
    closeModal: (state) => {
      state.isOpenModal = false;
      state.modalId = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchComicsById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.modalData = payload;
      })
      .addCase(fetchCharactersById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.characters = payload;
      })
      .addCase(fetchCreatorsById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.creators = payload;
      })
      .addMatcher(
        isAnyOf(
          fetchComicsById.pending,
          fetchCharactersById.pending,
          fetchCreatorsById.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchComicsById.rejected,
          fetchCharactersById.pending,
          fetchCreatorsById.pending
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const { openModal, closeModal } = generalModalSlice.actions;

export const generalModalReducer = generalModalSlice.reducer;
