import aboutImg from "../assets/image54.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <img src={aboutImg} alt="Van Life" className="w-full h-[350px]" />

      <div className="w-auto mx-auto px-14 py-10">
        <h1 className="text-7xl font-bold mb-6">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>

        <p className="text-[#161616] mb-4 font-medium">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
          <br />
          <br />
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>

        <div className="bg-[#FFCC8D] p-12 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">
            Your destination is waiting. Your van is ready.
          </h2>

          <button
            onClick={() => navigate("/vans")}
            className="bg-black text-white px-6 py-3 rounded-md font-medium"
          >
            Explore our vans
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
