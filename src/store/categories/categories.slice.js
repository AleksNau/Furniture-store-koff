import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategoreis = createAsyncThunk(
  "categories/fetchCategoreis",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.accessToken;

    const response = await fetch(
      "https://koff-api.vercel.app/api/productCategories",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (!response.ok) {
      throw new Error("Не удалось получить список!");
    }

    return response.json();
  },
);

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoreis.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategoreis.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCategoreis.rejected, (state, action) => {
        state.loading = false;
        state.error = state.error.message;
      });
  },
})

export default categoriesSlice.reducer;
