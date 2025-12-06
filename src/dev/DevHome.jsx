import { Link } from "react-router";
import { landingsRegistry } from "../landings/registry";

const DevHome = () => {
  const landingsList = Object.keys(landingsRegistry);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-10">
      <h1 className="text-black text-3xl sm:text-5xl font-bold mb-8 text-center">
        Landing Factory
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-3xl w-full">
        {landingsList.map((name) => (
          <Link
            key={name}
            to={`/landing/${name}`}
            className="bg-white rounded-xl p-6 text-center font-semibold text-black text-lg shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DevHome;
