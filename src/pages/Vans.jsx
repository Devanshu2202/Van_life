// import { useState } from "react";

import { useEffect, useState } from "react";

const Vans = () => {
  const [vans, setVan] = useState([]);

  console.log("vans", vans);

  const fetchData = async () => {
    console.log("fetch running");
    try {
      const response = await fetch("/api/vans");

      console.log("response", response);
      const data = await response.json();

      console.log("data", data);

      setVan(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* {vans.map((van) => {
        return <p>{van.}</p>;
      })} */}
      <h1>Vans Page</h1>
    </div>
  );
};

export default Vans;
