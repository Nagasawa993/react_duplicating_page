import { Routes, Route } from "react-router-dom";
import Top from "./pages/Top";
import Page from "./pages/Page";

const pages = [
  {id: 1, kind: "python", question: "○○は××ですか？",select: ["A", "B", "C", "D"],  answer: "A"},
  {id: 2, kind: "python", question: "○○は××ですか？",select: ["A", "B", "C", "D"],  answer: "A"},
  {id: 3, kind: "python", question: "○○は××ですか？",select: ["A", "B", "C", "D"],  answer: "A"}
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
