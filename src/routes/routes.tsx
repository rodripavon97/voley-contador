import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { GameMode } from "../pages/GameMode";
import { MatchLive } from "../pages/MatchLive/MatchLive";



export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <GameMode /> },
      { path: "/match-live", element: <MatchLive /> },
    ],
  },
]);
