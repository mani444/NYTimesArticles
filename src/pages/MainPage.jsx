import Navbar from "../components/Navbar/Navbar";
import ArticleList from "@/components/ArticleList/ArticleList";
import ProductList from "@/components/Products/ProductsList";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full">
        <ArticleList />
        <ProductList />
      </div>
      {/* <Outlet></Outlet> */}
    </>
  );
};

export default MainPage;
