import { createSlice } from "@reduxjs/toolkit";
import { getArticles } from "./articleThunk";

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArticles.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getArticles.fulfilled, (state, action) => {
        state.articles = action.payload.results;
        state.status = "succeeded";
      })
      .addCase(getArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default articlesSlice.reducer;
