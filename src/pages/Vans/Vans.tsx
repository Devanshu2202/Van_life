import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";


// 1. Define type for a single van
type Van = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  type: string;
};

const Vans = () => {
  // 2. Add type to state
  const [vans, setVans] = useState<Van[]>([]);
  const [loading, setLoading] = useState(true);
   const [searchParams, setSearchParams] = useSearchParams();

   const typeFilter = searchParams.get("type");

  useEffect(() => {
  const fetchVans = async () => {
    try {
      setLoading(true); // start loading

      const res = await fetch("/api/vans");
      const data = await res.json();

      setVans(data.vans);
    } catch (error) {
      console.error("Error fetching vans:", error);
    } finally {
      setLoading(false); // stop loading
    }
  };

  fetchVans();
}, []);

if (loading) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}


const filteredVans = typeFilter
  ? vans.filter(van => van.type === typeFilter)
  : vans;


 return (
  <div className="px-6 py-10 bg-[#FFF7ED]">
    <h1 className="text-3xl font-bold mb-6">
      Explore our van options
    </h1>

    {/* FILTER BUTTONS */}
    <div className="flex gap-4 mb-6">
      <button
        onClick={() => setSearchParams({ type: "simple" })}
        className={`px-4 py-2 rounded ${
          typeFilter === "simple"
            ? "bg-orange-500 text-white"
            : "bg-gray-200"
        }`}
      >
        Simple
      </button>

      <button
        onClick={() => setSearchParams({ type: "luxury" })}
        className={`px-4 py-2 rounded ${
          typeFilter === "luxury"
            ? "bg-orange-500 text-white"
            : "bg-gray-200"
        }`}
      >
        Luxury
      </button>

      <button
        onClick={() => setSearchParams({ type: "rugged" })}
        className={`px-4 py-2 rounded ${
          typeFilter === "rugged"
            ? "bg-orange-500 text-white"
            : "bg-gray-200"
        }`}
      >
        Rugged
      </button>

      <button
        onClick={() => setSearchParams({})}
        className="px-4 py-2 text-gray-600 underline"
      >
        Clear
      </button>
    </div>

    {/* ✅ THIS WAS MISSING */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
      {filteredVans.map((van) => (
        <Link to={`/vans/${van.id}`} key={van.id}>
          <div className="overflow-hidden">
            <img
              src={van.imageUrl}
              alt={van.name}
              className="w-full h-64 object-cover rounded-xl"
            />

            <div className="text-[#161616] flex justify-between py-2">
              <h2 className="font-semibold text-lg">{van.name}</h2>
              <p className="font-bold">${van.price}/day</p>
            </div>

            <span className="inline-block mt-2 bg-orange-500 text-white px-4 font-medium py-2 rounded text-sm">
              {van.type}
            </span>
          </div>
        </Link>
      ))}
    </div>
  </div>
);
};

export default Vans;