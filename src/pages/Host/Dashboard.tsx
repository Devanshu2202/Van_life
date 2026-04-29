import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Van = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
};

const Dashboard = () => {
  const [vans, setVans] = useState<Van[]>([]);

  console.log("Dashboard rendered, vans:", vans);

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
      <div className="bg-orange-100 p-6 rounded-lg mb-6">
        <h1 className="text-2xl font-bold">Welcome!</h1>
        <p className="text-gray-600 mt-2">Income last 30 days</p>
        <h2 className="text-3xl font-bold mt-2">$2,260</h2>
      </div>

      <div className="bg-orange-200 p-4 rounded-lg mb-6 flex justify-between">
        <p>Review score ⭐ 5.0/5</p>
        <Link to="/host/reviews">Details</Link>
      </div>

      <div>
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">Your listed vans</h2>
          <Link to="/host/vans">View all</Link>
        </div>

        <div className="space-y-3">
          {vans.map(van => (
            <div key={van.id} className="flex items-center gap-4 bg-white p-3 rounded-lg shadow">
              <img src={van.imageUrl} className="w-16 h-16 rounded" />
              <div>
                <p className="font-semibold">{van.name}</p>
                <p className="text-gray-500">${van.price}/day</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;