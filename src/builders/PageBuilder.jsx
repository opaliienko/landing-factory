import { ToastContainer } from "react-toastify";

import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Reviews from "../components/sections/Reviews";
import Footer from "../components/sections/Footer";

const sectionMap = { Hero, Features, Reviews, Footer };

const PageBuilder = ({ config, customSections = {} }) => {
  const mergedSections = { ...sectionMap, ...customSections };

  return (
    <>
      {config.sections.map((section, index) => {
        const SectionComponent = mergedSections[section.type];
        if (!SectionComponent) return null;
        return (
          <SectionComponent
            key={index}
            content={section.data}
            theme={config.theme}
            landingId={config.landingId}
          />
        );
      })}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default PageBuilder;
