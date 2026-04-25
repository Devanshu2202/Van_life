import { useEffect, useState } from "react";


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

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Explore our van options</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {vans.map((van) => (
          <div key={van.id} className="overflow-hidden">
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
        ))}
      </div>
    </div>
  );
};

export default Vans;