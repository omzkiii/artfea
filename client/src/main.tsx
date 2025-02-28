import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import AppRoutes from "./routes.tsx";
import Particles from "./components/particles.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <script src="./script.js" />
    <StrictMode>
      <AppRoutes />
      <Particles />
    </StrictMode>
  </BrowserRouter>,
);
