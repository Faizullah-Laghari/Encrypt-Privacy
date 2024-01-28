import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Home } from "./pages/Home";
import { Code } from "./pages/Code";
import { TokenAudit } from "./pages/TokenAudit";
import { LiveMonitor } from "./pages/LiveMonitor";
import { Score } from "./pages/Score";
import { Bounty } from "./pages/Bounty";
import { TokenCode } from "./pages/TokenCode";
import { TokenFunctions } from "./pages/TokenFunctions";
import { TokenOverview } from "./pages/TokenOverview";
import { Token } from "./pages/Token";
import { Dashboard } from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },

  {
    path: "/code",
    element: <Code />,
  },
  {
    path: "/token-audit",
    element: <TokenAudit />,
  },
  {
    path: "/live-monitor",
    element: <LiveMonitor />,
  },
  {
    path: "/security-score",
    element: <Score />,
  },
  {
    path: "/bounty",
    element: <Bounty />,
  },
  {
    path: "/token-code",
    element: <TokenCode />,
  },
  {
    path: "/token-functions",
    element: <TokenFunctions />,
  },
  {
    path: "/token-overview",
    element: <TokenOverview />,
  },
  {
    path: "/token",
    element: <Token />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
