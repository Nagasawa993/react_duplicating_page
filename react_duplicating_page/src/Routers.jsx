import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Top from "./pages/Top";
import Page from "./pages/Page";

export default function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/page/:index" element={<Page />} />
      </Routes>
    </Router>
  );
}
