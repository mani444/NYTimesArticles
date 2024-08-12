// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import logo from "@/assets/cardDefaultImage.jpg";
import { useParams, useLocation } from "react-router-dom";
import { fetchData } from "@/lib/utils";
import { Spinner } from "../ui/spinner";
import useSWR from "swr";

const ArticleDetail = () => {
  const api_key = import.meta.env.VITE_API_KEY;
  const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${api_key}`;
  const { data, error } = useSWR(url, fetchData);
  const { id } = useParams();
  const location = useLocation();
  console.log("location", location);
  console.log("params", useParams());

  const articles = data?.results || [];
  const article = articles.find((article) => article.id === +id);

  const placeholderImage = logo;
  const media = article?.media[0];
  const imageUrl = media ? media["media-metadata"][2].url : placeholderImage;

  if (error) return <div className="py-16">Failed to load</div>;
  if (!data)
    return (
      <div className="flex items-center justify-center h-[calc(100vh-100px)] gap-3">
        <Spinner size="large" testId="loading-spinner" />
      </div>
    );

  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div className="pt-4 flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
              {article?.title}
            </h1>
            <figure>
              <img
                className="relative w-full h-full object-cover"
                alt={article?.title}
                src={imageUrl}
              />
            </figure>
          </header>
          <address className="flex items-center mb-6 not-italic">
            <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
              <img
                className="mr-4 w-16 h-16 rounded-full"
                alt={article?.byline || "Unknown Author"}
                src={imageUrl}
              />
              <div>
                <a
                  href="#"
                  rel="author"
                  className="text-xl font-bold text-gray-900 dark:text-white"
                >
                  {article?.byline || "Unknown Author"}
                </a>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  Author
                </p>
              </div>
            </div>
          </address>
          <p className="lead ">{article?.abstract}</p>
          <a
            href={article?.url}
            target="_blank"
            className="text-blue-500 px-0 pb-16"
          >
            Read More
          </a>
        </article>
      </div>
    </main>
  );
};

export default ArticleDetail;
