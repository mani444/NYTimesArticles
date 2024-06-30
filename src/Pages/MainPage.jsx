import Navbar from "../components/Navbar/Navbar";
import ArticleList from "@/components/ArticleList/ArticleList";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full">
        <ArticleList />
      </div>
    </>
  );
};

export default MainPage;
