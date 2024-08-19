import ArticleDetail from "../components/ArticleDetail/ArticleDetail";
import Navbar from "../components/Navbar/Navbar";

const DetailPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full">
        <ArticleDetail />
      </div>
    </>
  );
};

export default DetailPage;
