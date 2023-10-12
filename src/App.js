import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import RankingPage from "./pages/Ranking";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/ranking", element: <RankingPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
