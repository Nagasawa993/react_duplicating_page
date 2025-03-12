import { useNavigate } from "react-router-dom";

function Top() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>TOPページ</h1>
      <button onClick={() => navigate("/page1")}>ページへ</button>
    </div>
  );
}

export default Top;
