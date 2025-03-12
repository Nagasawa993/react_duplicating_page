import { Routes, Route } from "react-router-dom";
import Top from "./pages/Top";
import Page from "./pages/Page";

const pages = ["ページ1", "ページ2", "ページ3"]; // 配列でページ名を管理

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      {pages.map((page, index) => (
        <Route key={index} path={`/page${index + 1}`} element={<Page index={index} pages={pages} />} />
      ))}
    </Routes>
  );
}

export default Routers;
