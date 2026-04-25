import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[url('/src/assets/image53.png')] bg-cover bg-center h-[90vh] flex items-center">
      <div className="text-white px-6 max-w-xl">
        <h1 className="text-4xl font-bold mb-4">
          You got the travel plans, we got the travel vans.
        </h1>

        <p className="mb-6 text-lg">
          Add adventure to your life by joining the #VanLife movement. Rent the
          perfect van to make your perfect road trip.
        </p>

        <Link
          to="/vans"
          className="bg-orange-500 px-6 py-3 rounded-md font-semibold"
        >
          Find your van
        </Link>
      </div>
    </div>
  );
};

export default Home;
