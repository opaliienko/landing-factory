import ReactDOM from "react-dom/client";
import PageBuilder from "../../builders/PageBuilder";
import { landingB } from "./config";

import "../../styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PageBuilder config={landingB} />
);
