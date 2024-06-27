import React from "react";
import Navbar from "../Navbar/navbar";

import ArticleCards from "../Cards/articleCards";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="w-full">
        <ArticleCards />
      </div>
    </>
  );
};

export default Page;
