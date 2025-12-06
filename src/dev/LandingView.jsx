import { Link, useParams } from "react-router";

import BackIcon from "./icons/BackIcon";

import { landingsRegistry } from "../landings/registry";

import PageBuilder from "../builders/PageBuilder";

const LandingView = () => {
  const { landingName } = useParams();
  const config = landingsRegistry[landingName];

  return (
    <div>
      <div className="fixed top-0 left-0 p-5 z-100">
        <Link to="/" className="">
          <BackIcon />
        </Link>
      </div>

      <PageBuilder config={config} />
    </div>
  );
};

export default LandingView;
