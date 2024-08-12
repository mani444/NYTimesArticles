// // eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import useSWR from "swr";
import { fetchData } from "@/lib/utils";
import ArticleCard from "../ArticleCard/ArticleCard";
import { Spinner } from "@/components/ui/spinner";
import { getArticles } from "@/redux/articles/articleThunk";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useGetArticlesQuery } from "@/redux/rtkSlice/articles";
import { useGetWeekArticlesQuery } from "@/redux/rtkSlice/articles";
import { Outlet } from "react-router-dom";

const ArticleList = () => {
  // const dispatch = useDispatch();
  // const articles = useSelector((state) => state.articles.articles);
  // console.log("articles",articles);
  // const error = useSelector((state) => state.articles.error);
  // console.log("error",error);
  // const status = useSelector((state) => state.articles.status);
  // console.log("status",status);

  // useEffect(() => {
  //   if (status === "idle") {
  //     dispatch(getArticles());
  //   }
  // }, [status, dispatch]);
  const [skipQuery, setSkipQuery] = useState(false);

  const { data, error, isLoading, refetch } = useGetArticlesQuery(undefined, {
    refetchOnMountOrArgChange: 60,
    skip: skipQuery,
    // pollingInterval: 3000,
  });
  const { data: weeklyArticles } = useGetWeekArticlesQuery();

  console.log(`weeklyArticles`, weeklyArticles?.results);
  console.log(`data`, data);

  if (error) return <div>Failed to load</div>;
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-[calc(100vh-100px)] gap-3">
        <Spinner size="large" testId="loading-spinner" />
      </div>
    );

  const articles = data?.results || [];
  console.log(`articles`, articles);

  return (
    <>
      {/* <Outlet/> */}

      <div className="relative py-16">
        <div className="container mx-auto px-4">
          <div className="innermain flex w-3/4 mr-auto ml-auto mb-32 pt-10">
            <div className="flex flex-col w-full justify-center items-center relative">
              <div className="flex flex-col w-full items-start gap-4 relative">
                <div className="flex flex-col w-full items-center gap-2 relative">
                  <div className="relative w-fit font-medium text-primary text-4 text-center tracking-[3.00px] whitespace-nowrap uppercase">
                    NewYork Times
                  </div>
                  <div className="relative w-fit font-bold text-darkgrey text-4xl text-center leading-tight whitespace-nowrap">
                    Most Popular Articles
                  </div>
                </div>
              </div>
              <div className="flex align-middle items-center justify-center pt-10">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8">
                  {articles?.map((article, index) => (
                    <ArticleCard
                      article={article}
                      index={index}
                      key={article.id + index}
                    />
                  ))}
                </div>
              </div>
              <button
                onClick={refetch}
                className="mt-4 p-2 bg-blue-500 text-white rounded"
              >
                Refetch Articles
              </button>
              <button
                onClick={() => setSkipQuery(!skipQuery)}
                className="mt-4 p-2 bg-red-500 text-white rounded"
              >
                {skipQuery ? "Resume Fetching" : "Skip Fetching"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleList;
