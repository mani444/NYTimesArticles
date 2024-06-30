import DetailPage from "@/pages/DetailPage";
import MainPage from "@/pages/MainPage";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";

function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default MainRouter;
