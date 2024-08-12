import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { getArticles } from '../articles/articleThunk';

const api_key = import.meta.env.VITE_API_KEY;
const baseUrl = `https://api.nytimes.com/svc/mostpopular/v2`;

const articles = createApi({
  reducerPath: "articles",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Article"],
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: () => `/viewed/1.json?api-key=${api_key}`,
      providesTags: ["Article"],
    }),
    getWeekArticles: builder.query({
      query: () => `/viewed/7.json?api-key=${api_key}`,
    }),
    // updateArticle: builder.mutation({
    //     query: (article) => ({
    //       url: `articles/${article.id}`,
    //       method: 'PUT',
    //       body: article,
    //     }),
    //     invalidatesTags: [{ type: 'Article'}],
    //   }),
  }),
});

// const articles = createApi({
//     reducerPath: 'articles',
//     baseQuery: fetchBaseQuery({ baseUrl: '/' }),
//     endpoints: (builder) => ({
//       getArticles: builder.query({
//         query: ({ page = 1, limit = 10 }) => `articles?page=${page}&limit=${limit}`,
//         providesTags: (result, error, { page }) => [{ type: 'Article', id: `PAGE-${page}` }],
//       }),
//     }),
//   });

export const { useGetArticlesQuery } = articles;
export const { useGetWeekArticlesQuery } = articles;

export default articles;
