import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./articles/articleSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import articles from "./rtkSlice/articles";
import products from "./rtkSlice/productSlicle";

// const store = configureStore({
//     reducer: {
//         articles: articlesReducer,
//     },
// })

const store = configureStore({
  reducer: {
    [articles.reducerPath]: articles.reducer,
    [products.reducerPath]: products.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articles.middleware, products.middleware),
});

setupListeners(store.dispatch);

export default store;
