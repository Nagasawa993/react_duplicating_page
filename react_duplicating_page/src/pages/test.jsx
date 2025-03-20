import { useState } from "react";

const pages = [
  { id: 1, kind: "python", question: "○○は××ですか？", select: ["A", "B", "C", "D"], answer: "A" },
  { id: 2, kind: "python", question: "○○は××ですか？", select: ["A", "B", "C", "D"], answer: "B" },
  { id: 3, kind: "VBA", question: "○○は××ですか？", select: ["A", "B", "C", "D"], answer: "C" },
  { id: 4, kind: "VBA", question: "○○は××ですか？", select: ["A", "B", "C", "D"], answer: "D" },
  { id: 5, kind: "LPIC", question: "○○は××ですか？", select: ["A", "B", "C", "D"], answer: "A" }
];

export default function App() {
  const [selectedKinds, setSelectedKinds] = useState([]);

  // ボタンをクリックしてフィルタリング対象を切り替える
  const toggleKind = (kind) => {
    setSelectedKinds((prev) =>
      prev.includes(kind) ? prev.filter(k => k !== kind) : [...prev, kind]
    );
  };

  // 選択されたkindの配列を作成
  const filteredPages = pages.filter(page => selectedKinds.includes(page.kind));

  return (
    <div>
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

      <h2>選択された問題</h2>
      {filteredPages.length > 0 ? (
        <ul>
          {filteredPages.map((page) => (
            <li key={page.id}>
              {page.kind}: {page.question}
            </li>
          ))}
        </ul>
      ) : (
        <p>問題が選択されていません</p>
      )}
    </div>
  );
}
