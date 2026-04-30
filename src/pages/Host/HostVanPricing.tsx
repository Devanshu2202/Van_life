import { useOutletContext } from "react-router-dom";

type Van = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  type: string;
};

const HostVanPricing = () => {
  const van = useOutletContext<Van>();

  return (
    <div className="text-sm space-y-3">
      <h4 className="font-semibold text-gray-900">
        Price:{" "}
        <span className="font-normal text-gray-600">
          ${van.price}/day
        </span>
      </h4>
    </div>
  );
};

export default HostVanPricing;