import { useOutletContext } from "react-router-dom";

type Van = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  type: string;
};

const HostVanPhotos = () => {
  const van = useOutletContext<Van>();

  return (
    <div className="mt-2">
      <img
        src={van.imageUrl}
        className="w-40 h-40 object-cover rounded-md"
      />
    </div>
  );
};

export default HostVanPhotos;