import DetailPage from "@/pages/DetailPage";
import MainPage from "@/pages/MainPage";
import NotFoundPage from "@/pages/NotFoundPage";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <NotFoundPage />,
    // children:[
    //   {
    //     // path: '/detail/:id',
    //     index: true,
    //     element: <DetailPage />,
    //     // children:[{
    //     //   path: '/detail/:id/detais',
    //     //   element: <DetailPage />,
    //     // }]
    //   },
    // ]
  },
  {
    path: "/detail/:id",
    element: <DetailPage />,
  },
]);

function MainRouter() {
  return <RouterProvider router={router} />;
}

export default MainRouter;
