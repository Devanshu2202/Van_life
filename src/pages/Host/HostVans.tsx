import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Van = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
};

const HostVans = () => {
  const [vans, setVans] = useState<Van[]>([]);

  useEffect(() => {

    const fetchVans = async () => {
      try {
        const res = await fetch("/api/host/vans");
        const data = await res.json();
        setVans(data.vans);
      } catch (error) {
        console.error("Error fetching vans:", error);
      }

      };
      fetchVans();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your listed vans</h1>

     <div className="space-y-4">
  {vans.map((van) => (
    <Link
      to={`/host/vans/${van.id}`} 
      key={van.id}
      className="flex items-center gap-4 bg-white p-4 rounded-lg shadow hover:shadow-lg"
    >
      <img src={van.imageUrl} className="w-20 h-20 rounded-md" />

      <div>
        <h2 className="font-semibold">{van.name}</h2>
        <p className="text-gray-500">${van.price}/day</p>
      </div>
    </Link>
  ))}
</div>
    </div>
  );
};

export default HostVans;