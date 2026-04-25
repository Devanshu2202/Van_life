import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Van = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  type: string;
  description: string;
};

const VanDetail = () => {
  const { id } = useParams<{ id: string }>();
  

  const [van, setVan] = useState<Van | null>(null);

  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVan = async () => {
      try {
        const res = await fetch(`/api/vans/${id}`);
        const data = await res.json();

        console.log("data",data.vans.name);
     
        
        setVan(data.vans);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchVan();
  }, [id]);

  // 🔥 Loading
  if (loading) {
    return <h1 className="text-center mt-10 text-xl">Loading...</h1>;
  }

  // 🔥 Safety check
  if (!van) {
    return <h1 className="text-center mt-10">Van not found</h1>;
  }

  return (
    <div className="px-6 py-10">
      <img
        src={van.imageUrl}
        alt={van.name}
        className="w-full max-w-md rounded-lg mb-6"
      />

      <span className="bg-orange-500 text-white px-4 py-1 rounded">
        {van.type}
      </span>

      <h1 className="text-3xl font-bold mt-4">{van.name}</h1>

      <p className="text-xl font-semibold my-2">${van.price}/day</p>

      <p className="text-gray-700">{van.description}</p>

      <button className="mt-6 bg-black text-white px-6 py-3 rounded">
        Rent this van
      </button>
    </div>
  );
};

export default VanDetail;