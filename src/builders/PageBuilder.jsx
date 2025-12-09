import { ToastContainer } from "react-toastify";

import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Reviews from "../components/sections/Reviews";
import Footer from "../components/sections/Footer";

import { validateConfig } from "../helpers/validateConfig";

const sectionMap = { Hero, Features, Reviews, Footer };

const PageBuilder = ({ config, customSections = {} }) => {
  const mergedSections = { ...sectionMap, ...customSections };

  const isValid = validateConfig(config, mergedSections);
  if (!isValid) {
    return (
      <div
        className="w-full min-h-screen flex justify-center items-center text-center mb-6 md:mb-8 lg:mb-10 text-3xl md:text-4xl font-bold"
        style={{ color: "red" }}
      >
        Помилка конфігурації. Деталі у консолі.
      </div>
    );
  }

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
