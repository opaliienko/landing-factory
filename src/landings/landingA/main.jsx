import ReactDOM from "react-dom/client";
import PageBuilder from "../../builders/PageBuilder";
import { landingA } from "./config";

import "../../styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PageBuilder config={landingA} />
);
