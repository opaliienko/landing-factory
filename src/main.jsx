import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/global.css";

import DevApp from "./dev/DevApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DevApp />
  </StrictMode>
);
