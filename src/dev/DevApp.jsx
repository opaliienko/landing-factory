import { BrowserRouter, Routes, Route } from "react-router";
import DevHome from "./DevHome";
import LandingView from "./LandingView";

const DevApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DevHome />} />
        <Route path="/landing/:landingName" element={<LandingView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default DevApp;
