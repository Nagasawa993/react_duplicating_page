import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { pages } from "../data/questions";

export default function Top() {
  const [selectedKinds, setSelectedKinds] = useState([]);
  const navigate = useNavigate();

  // ボタンのON/OFFを切り替える
  const toggleKind = (kind) => {
    setSelectedKinds((prev) =>
      prev.includes(kind) ? prev.filter(k => k !== kind) : [...prev, kind]
    );
  };

  // 選択されたkindの配列を作成
  const filteredPages = pages.filter(page => selectedKinds.includes(page.kind));

  // スタートボタン押下時に最初の問題ページへ遷移
  const startQuiz = () => {
    if (filteredPages.length > 0) {
      navigate(`/page/0`, { state: { filteredPages } });
    } else {
      alert("問題を選択してください！");
    }
  };

  return (
    <div>
      <h1>Topページ</h1>
      <div>
        {["python", "VBA", "LPIC"].map((kind) => (
          <button
            key={kind}
            onClick={() => toggleKind(kind)}
            style={{
              margin: "5px",
              padding: "10px",
              backgroundColor: selectedKinds.includes(kind) ? "lightblue" : "white"
            }}
          >
            {kind}
          </button>
        ))}
      </div>
      <button onClick={startQuiz} style={{ marginTop: "10px", padding: "10px" }}>
        スタート
      </button>
    </div>
  );
}
