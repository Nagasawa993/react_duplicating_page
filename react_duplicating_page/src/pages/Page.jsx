import { useNavigate } from "react-router-dom";

function Page({ page, nextPageIndex, totalPages }) {
  const navigate = useNavigate();
  const nextPagePath = nextPageIndex < totalPages ? `/page${nextPageIndex + 1}` : "/";

  return (
    <div>
      <h1>{page.name}</h1>
      <p>id: {page.id}</p>
      <p>質問: {page.question}</p>
      <p>カテゴリ: {page.kind}</p>
      {nextPageIndex < totalPages ? (
        <button onClick={() => navigate(nextPagePath)}>次のページへ</button>
      ) : (
        <button onClick={() => navigate("/")}>TOPへ戻る</button>
      )}
    </div>
  );
}

export default Page;
