import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isOpenModal: false,
  modalData: null,
  comicsList: null,
  modalId: null,
  isLoading: false,
  error: null,
};

export const fetchCharacterById = createAsyncThunk(
  "get/characterById",
  async (comicId, thunkApi) => {
    const url = `https://gateway.marvel.com/v1/public/characters/${comicId}?ts=1&apikey=c87027ae7e999f1d55f30abb6cd8640a&hash=9eda1bfd398c2b6e2f47bf5c6f9bbc2f`;
    try {
      const { data } = await axios.get(url);
      return data.data.results[0];
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const fetchListOfComicsById = createAsyncThunk(
  "get/listOfComicsById",
  async (comicId, thunkApi) => {
    const url = `https://gateway.marvel.com/v1/public/characters/${comicId}/comics?ts=1&apikey=c87027ae7e999f1d55f30abb6cd8640a&hash=9eda1bfd398c2b6e2f47bf5c6f9bbc2f`;
    try {
      const { data } = await axios.get(url);
      return data.data.results;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

const characterModalSlice = createSlice({
  name: "charactersModal",

  initialState,

  reducers: {
    openModalCharacters: (state, { payload }) => {
      state.isOpenModal = true;
      state.modalId = payload;
    },
    closeModalCharacters: (state) => {
      state.isOpenModal = false;
      state.modalId = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCharacterById.pending, (state, _) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCharacterById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.modalData = payload;
      })
      .addCase(fetchCharacterById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchListOfComicsById.pending, (state, _) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchListOfComicsById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.comicsList = payload;
      })
      .addCase(fetchListOfComicsById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export const { openModalCharacters, closeModalCharacters } =
  characterModalSlice.actions;

export const charactersModalReducer = characterModalSlice.reducer;
