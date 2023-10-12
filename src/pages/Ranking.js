import { Navigate } from "react-router-dom";

export default function RankingPage() {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (!isAuthenticated) return <Navigate to={"/"} />;

  return <h3>Ranking page</h3>;
}
