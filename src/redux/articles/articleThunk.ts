import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosIns from "axios";

const api_key = import.meta.env.VITE_API_KEY;
const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${api_key}`;

export const getArticles = createAsyncThunk(
  "articles/getArticles",
  async () => {
    const respose = await axiosIns.get(url);
    return respose.data;
  }
);
