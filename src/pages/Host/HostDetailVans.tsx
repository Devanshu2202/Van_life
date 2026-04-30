import { useParams, NavLink, Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";

type Van = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  type: string;
};

const HostDetailVans = () => {
  const { id } = useParams();
   const [currentVan, setcurrentVan] = useState<Van | null>(null);

  useEffect(() => {
    const fetchVan = async () => {
      const res = await fetch(`/api/host/vans/${id}`);
      const data = await res.json();
      setcurrentVan(data.vans); // based on your API
    };

    fetchVan();
  }, [id]);

  if (!currentVan) return <h2>Loading...</h2>;

  return (
    <div className="p-6">

      {/* 🔙 Back */}
      <Link to=".." relative="path">
  ← Back to all vans
</Link>

      {/* 🔥 Main Card */}
      <div className="bg-gray-100 p-6 rounded-lg">

        {/* Top Section */}
        <div className="flex gap-6 items-center">
          <img
            src={currentVan.imageUrl}
            className="w-32 h-32 rounded-md object-cover"
          />

          <div>
            {/* Type Badge */}
            <span className="bg-orange-400 text-white text-xs px-3 py-1 rounded">
              {currentVan.type}
            </span>

            {/* Name */}
            <h2 className="text-2xl font-bold mt-2">
              {currentVan.name}
            </h2>

            {/* Price */}
            <p className="text-gray-700">
              <span className="font-semibold">${currentVan.price}</span>/day
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 mt-6 border-b pb-2">
          <NavLink
            to="."
            end
            className={({ isActive }) =>
              isActive ? "font-bold underline" : "text-gray-500"
            }
          >
            Details
          </NavLink>

          <NavLink
            to="pricing"
            className={({ isActive }) =>
              isActive ? "font-bold underline" : "text-gray-500"
            }
          >
            Pricing
          </NavLink>

          <NavLink
            to="photos"
            className={({ isActive }) =>
              isActive ? "font-bold underline" : "text-gray-500"
            }
          >
            Photos
          </NavLink>
        </div>

        {/* Content */}
        <div className="mt-4">
          <Outlet context={currentVan } />
        </div>
      </div>
    </div>
  );
};

export default HostDetailVans;