import ReactDOM from "react-dom/client";
import PageBuilder from "@/builders/PageBuilder";
import { config } from "./config";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PageBuilder config={config} />
);
