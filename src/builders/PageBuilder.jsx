import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Reviews from "../components/sections/reviews";
import Footer from "../components/sections/Footer";

const sectionMap = { Hero, Features, Reviews, Footer };

const PageBuilder = ({ config }) => {
  return (
    <>
      {config.sections.map((section, index) => {
        const SectionComponent = sectionMap[section.type];
        if (!SectionComponent) return null;
        return <SectionComponent key={index} content={section.data} />;
      })}
    </>
  );
};

export default PageBuilder;
