// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import useSWR from "swr";
import { fetchData } from "../../lib/utils";
import logo from "../../assets/cardDefaultImage.jpg";

const ArticleCard = () => {
  const url =
    "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=Xt71Gy5lyrhc81n0R7LcWH1yljib2qXR";
  const { data, error } = useSWR(url, fetchData);
  const [expandedArticles, setExpandedArticles] = useState({});

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const articles = data?.results || [];
  const placeholderImage = logo;

  const handleExpandClick = (index) => {
    setExpandedArticles((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="relative">
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
                {articles.map((article, index) => {
                  const media = article.media && article.media[0];
                  const imageUrl = media
                    ? media["media-metadata"][2].url
                    : placeholderImage;
                  const publishedDate = article.updated.split(" ")[0];
                  const isExpanded = expandedArticles[index];

                  return (
                    <Card
                      key={index}
                      className="flex max-w-[370px] py-0 border-0 news-block-one"
                    >
                      <div className="relative bg-white rounded-[10px] overflow-hidden !shadow-custom opacity-[0.93] inner-box">
                        <CardHeader className="p-0 image-holder">
                          {imageUrl && (
                            <img
                              className="relative w-full h-full object-cover"
                              alt={article.title}
                              src={imageUrl}
                            />
                          )}
                        </CardHeader>
                        <CardContent className="relative pl-7 pt-6 flex flex-col items-start justify-center">
                          <div className="flex align-middle items-center justify-start gap-3 py-0 w-full">
                            <div
                              title={article.byline || "Unknown Author"}
                              className="[font-family:'Roboto-Regular',Helvetica] text-customgrey text-[14px] md:text-[15px] lg:text-[17px] tracking-[0] leading-[32px] whitespace-nowrap overflow-hidden text-ellipsis"
                            >
                              {article.byline || "Unknown Author"}
                            </div>
                          </div>
                          <div className="inline-flex pb-1">
                            <CardTitle
                              className={`relative min-h-[4rem] text-start font-semibold text-grey text-[16px] md:text-[20px] lg:text-[22px] tracking-[0] leading-[32px] ${
                                isExpanded ? "" : "line-clamp-2"
                              }`}
                            >
                              <a href={article.url} target="_blank">
                                {article.title}
                              </a>
                            </CardTitle>
                          </div>
                          <div className="flex">
                            <CardDescription
                              className={`relative min-h-[4rem] text-start [font-family:'Roboto-Regular',Helvetica] text-customgrey text-[14px] md:text-[15px] lg:text-[17px] tracking-[0] leading-[32px] ${
                                isExpanded ? "" : "line-clamp-2"
                              }`}
                            >
                              {article.abstract}
                            </CardDescription>
                          </div>
                          <button
                            onClick={() => handleExpandClick(index)}
                            className="text-blue-500"
                          >
                            {isExpanded ? "Show Less" : "Read More"}
                          </button>
                        </CardContent>
                        <CardFooter>
                          <span className="font-bold">Published:</span>{" "}
                          {publishedDate}
                        </CardFooter>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
