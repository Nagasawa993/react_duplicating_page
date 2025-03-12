import { Routes, Route } from "react-router-dom";
import Top from "./pages/Top";
import Page from "./pages/Page";

const pages = [
  { name: "ページ1", question: "1+2=", answer: "3",category: "A" },
  { name: "ページ2", question: "3-4=", answer: "-1",category: "A" },
  { name: "ページ3", question: "5*6=", answer: "30",category: "B" },
  { name: "ページ4", question: "7/8=", answer: "0",category: "B" }
];

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      {pages.map((page, index) => (
        <Route
          key={index}
          path={`/page${index + 1}`}
          element={<Page page={page} nextPageIndex={index + 1} totalPages={pages.length} />}
        />
      ))}
    </Routes>
  );
}

export default Routers;
