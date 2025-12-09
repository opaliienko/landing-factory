import ReactDOM from "react-dom/client";
import PageBuilder from "@/builders/PageBuilder";
import { config } from "./config";

import CustomSection from "./components/sections/CustomSection/CustomSection";

import "./index.css";

const customSections = {
  CustomSection,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <PageBuilder config={config} customSections={customSections} />
);
