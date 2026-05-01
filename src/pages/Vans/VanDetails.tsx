import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();

  useEffect(() => {
    const fetchVan = async () => {
      try {
        const res = await fetch(`/api/vans/${id}`);
        const data = await res.json();

     
        
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

    
   <div className="p-6">
  <Link
  to={`..${location.state?.search || ""}`}
  relative="path"
  className="inline-block mb-6 text-gray-700 hover:text-black font-medium"
>
  ← Back to all vans
</Link>

  <div className="flex flex-col md:flex-row gap-8 items-start">
    
    <img
      src={van.imageUrl}
      alt={van.name}
      className="w-full md:w-1/2 rounded-lg"
    />

    <div className="md:w-1/2">
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
  </div>
</div>
  );
};

export default VanDetail;