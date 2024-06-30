// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import useSWR from "swr";
import { fetchData } from "@/lib/utils";
import ArticleCard from "../ArticleCard/ArticleCard";
import { Spinner } from '@/components/ui/spinner';

const ArticleList = () => {
  const api_key =  import.meta.env.VITE_API_KEY;
  const url =
    `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${api_key}`;
  const { data, error } = useSWR(url, fetchData);

  if (error) return <div>Failed to load</div>;
  if (!data)
    return (
      <div className="flex items-center justify-center h-[calc(100vh-100px)] gap-3">
        <Spinner size="large" testId="loading-spinner" />
      </div>
    );

  const articles = data?.results || [];

  return (
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
                {articles.map((article, index) => (
                  <ArticleCard article={article} index={index} key={article.id + index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
