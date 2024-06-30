import Navbar from "../components/Navbar/Navbar";

import ArticleCard from "../components/Cards/ArticleCard";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full">
        <ArticleCard />
      </div>
    </>
  );
};

export default MainPage;
