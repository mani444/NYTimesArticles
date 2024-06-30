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
import logo from "@/assets/cardDefaultImage.jpg";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const ArticleCard = ({ article, index }) => {
  const [expandedArticles, setExpandedArticles] = useState({});

  const placeholderImage = logo;
  const media = article.media && article.media[0];
  const imageUrl = media ? media["media-metadata"][2].url : placeholderImage;
  const publishedDate = article.updated.split(" ")[0];
  const isExpanded = expandedArticles[index];
  const navigate = useNavigate();

  const handleExpandClick = (index) => {
    setExpandedArticles((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <Card
      key={index}
      className="flex max-w-[370px] py-0 border-0 news-block-one"
    >
      <div className="relative bg-white rounded-[10px] overflow-hidden !shadow-custom opacity-[0.93] inner-box">
        <CardHeader className="p-0 image-holder cursor-pointer">
          <Link to={`/detail/${article.id}`}>
            {imageUrl && (
              <img
                className="relative w-full h-full object-cover"
                alt={article.title}
                src={imageUrl}
              />
            )}
          </Link>
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
              className={`cursor-pointer relative min-h-[4rem] text-start font-semibold text-grey text-[16px] md:text-[20px] lg:text-[22px] tracking-[0] leading-[32px] line-clamp-2
              }`}
              onClick={() => {
                navigate(`/detail/${article.id}`);
              }}
            >
              {article.title}
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
          <Button
            onClick={() => handleExpandClick(index)}
            className="text-blue-500 px-0"
            variant="text"
          >
            {isExpanded ? "Show Less" : "Read More"}
          </Button>
        </CardContent>
        <CardFooter>
          <span className="font-bold">Published: &nbsp;</span>{" "}
          {` ${publishedDate}`}
        </CardFooter>
      </div>
    </Card>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number,
    media: PropTypes.arrayOf(
      PropTypes.shape({
        "media-metadata": PropTypes.arrayOf(
          PropTypes.shape({
            url: PropTypes.string,
          })
        ).isRequired,
      })
    ).isRequired,
    updated: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    byline: PropTypes.string,
    url: PropTypes.string.isRequired,
    abstract: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ArticleCard;
