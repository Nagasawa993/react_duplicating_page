import { useNavigate } from "react-router-dom";

function Page({ index, pages }) {
  const navigate = useNavigate();
  const nextPage = index + 1 < pages.length ? `/page${index + 2}` : "/";

  return (
    <div>
      <h1>{pages[index]}</h1>
      {index + 1 < pages.length ? (
        <button onClick={() => navigate(nextPage)}>次のページへ</button>
      ) : (
        <button onClick={() => navigate("/")}>TOPへ戻る</button>
      )}
    </div>
  );
}

export default Page;
