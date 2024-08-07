import Navbar from "../components/Navbar/Navbar";
import ArticleList from "@/components/ArticleList/ArticleList";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full">
        <ArticleList />
      </div>
      {/* <Outlet></Outlet> */}
    </>
  );
};

export default MainPage;
