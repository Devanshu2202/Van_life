import { useOutletContext } from "react-router-dom";

type Van = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  type: string;
};

const HostVanInfo = () => {
  const van = useOutletContext<Van>(); // ✅ no destructuring

  return (
   <div className="text-sm space-y-2 text-gray-800">
  <h4 className="font-semibold">
    Name: <span className="font-normal text-gray-600">{van.name}</span>
  </h4>

  <h4 className="font-semibold">
    Category: <span className="font-normal text-gray-600">{van.type}</span>
  </h4>

  <h4 className="font-semibold">
    Description: <span className="font-normal text-gray-600">{van.description}</span>
  </h4>

  <h4 className="font-semibold">
    Visibility: <span className="font-normal text-gray-600">Public</span>
  </h4>
</div>
  );
};

export default HostVanInfo;